import {
  Alert,
  Chat,
  InputField,
  MessageBubble,
  MessageText,
  SendButton,
} from '@/components/chat';
import { useChat } from '@/hooks';

/**
 * Un componente de página principal para una interfaz de chat.
 *
 * @returns {React.JSX.Element} El componente de página del chat renderizado.
 */
const ChatPage = () => {
  const {
    messages,
    form,
    loading,
    error,
    handleSubmit,
    handleCloseAlert,
    handleChange,
  } = useChat();

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
};

export default ChatPage;
