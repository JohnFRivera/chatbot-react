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
