import { useState } from 'react';

/**
 * Un custom hook para gestionar la lógica de un componente de chat.
 *
 * @returns {{
 * messages: Array<{ type: 'question' | 'answer', text: string }>,
 * form: { question: string },
 * loading: boolean,
 * error: string | null,
 * handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
 * handleCloseAlert: () => void,
 * handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
 * }} Un objeto con los estados y las funciones para el componente de chat.
 */
const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ question: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainer = document.getElementById('chat-container');

  /**
   * Manejador asíncrono para el envío de un formulario en un chat.
   *
   * @async
   * @param {React.FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
   * @returns {Promise<void>} No devuelve un valor directamente, pero realiza acciones asíncronas.
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
   * Un manejador de eventos para cerrar o ocultar una alerta.
   */
  const handleCloseAlert = () => setError(null);

  /**
   * Un manejador de eventos genérico para actualizar el estado de un formulario.
   *
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - El evento de cambio del elemento del formulario.
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
