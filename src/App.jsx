import { useEffect } from 'react';
import { Chat } from './components/layout';
import {
  Alert,
  InputField,
  MessageBubble,
  MessageText,
  SendButton,
} from './components/ui';
import { useChat } from './hooks';

function App() {
  const {
    messages,
    form,
    loading,
    error,
    handleSubmit,
    handleCloseAlert,
    handleChange,
  } = useChat();

  useEffect(() => {
    // Detecta la preferencia del usuario
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const htmlElement = document.documentElement;

    // Establece el atributo data-bs-theme en el elemento <html>
    htmlElement.setAttribute(
      'data-bs-theme',
      userPrefersDark ? 'dark' : 'light'
    );
  }, []);

  return (
    <Chat>
      <Chat.Body>
        {messages.map((message, i) =>
          message.type === 'question' ? (
            <MessageBubble key={i} message={message.text} />
          ) : (
            <MessageText key={i} message={message.text} />
          )
        )}
      </Chat.Body>
      <Chat.Footer onSubmit={handleSubmit}>
        {error && (
          <Alert variant="danger" message={error} onClose={handleCloseAlert} />
        )}
        <InputField value={form.question} onChange={handleChange} />
        <SendButton disabled={!form.question || loading} loading={loading} />
      </Chat.Footer>
    </Chat>
  );
}

export default App;
