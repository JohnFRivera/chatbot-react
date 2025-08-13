import { useState } from 'react';
import {
  ActionsMenu,
  Alert,
  Chat,
  InputField,
  MessageBubble,
  MessageText,
  SendButton,
  Spinner,
} from '@/components/chat';
import { useChat, useOutsideClick } from '@/hooks';

/**
 * Un componente de página principal para una interfaz de chat.
 *
 * @returns {React.JSX.Element} El componente de página del chat renderizado.
 */
const ChatPage = () => {
  const [show, setShow] = useState(false);
  const {
    messages,
    form,
    loading,
    error,
    handleSubmit,
    handleCloseAlert,
    handleChange,
  } = useChat();
  const ref = useOutsideClick(() => setShow(false));

  return (
    <Chat>
      <Chat.Header>
        <p className="text-body-emphasis rounded-4 fs-5 lh-1 py-2 px-3 mb-0">
          SuperGIROS
        </p>
        <div>
          <ActionsMenu ref={ref} show={show} onToggle={() => setShow(!show)}>
            <ActionsMenu.Button onClick={() => setShow(false)}>
              <i className="bi bi-archive me-2"></i>
              Archivar
            </ActionsMenu.Button>
            <ActionsMenu.Button onClick={() => setShow(false)}>
              <i className="bi bi-flag me-2"></i>
              Informar
            </ActionsMenu.Button>
            <ActionsMenu.Button variant="delete" onClick={() => setShow(false)}>
              <i className="bi bi-trash me-2"></i>
              Eliminar
            </ActionsMenu.Button>
          </ActionsMenu>
        </div>
      </Chat.Header>
      <Chat.Body>
        {messages.map((message, i) =>
          message.type === 'question' ? (
            <MessageBubble key={i} message={message.text} />
          ) : (
            <MessageText key={i} message={message.text} />
          )
        )}
        {loading && <Spinner />}
        {error && (
          <Alert variant="danger" message={error} onClose={handleCloseAlert} />
        )}
      </Chat.Body>
      <Chat.Footer onSubmit={handleSubmit}>
        <InputField value={form.question} onChange={handleChange} />
        <SendButton disabled={!form.question || loading} loading={loading} />
      </Chat.Footer>
    </Chat>
  );
};

export default ChatPage;
