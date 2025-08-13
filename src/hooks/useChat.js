import { useState } from 'react';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ question: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainer = document.getElementById('chat-container');

  /**
   * Evento de enviar formulario.
   * @param {React.FormEvent} e - Evento
   */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setMessages((prev) => [
        ...prev,
        { type: 'question', text: form.question },
      ]);
      setTimeout(() => {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth',
        });
      }, 200);
      setForm({ question: '' });
      setLoading(true);
      setError(null);

      // Consulta
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      setMessages((prev) => [...prev, { type: 'answer', text: data.answer }]);
      setTimeout(() => {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth',
        });
      }, 200);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Evento para cerrar alerta.
   */
  const handleCloseAlert = () => setError(null);

  /**
   * Evento cuando una entrada de texto cambia.
   * @param {React.InputEvent} e - Evento
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return {
    messages,
    form,
    loading,
    error,
    handleSubmit,
    handleCloseAlert,
    handleChange,
  };
};

export default useChat;
