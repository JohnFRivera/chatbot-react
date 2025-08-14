import {
  ActionsMenu,
  Alert,
  Button,
  Chat,
  InputField,
  MessageBubble,
  MessageText,
  Modal,
  Radio,
  SendButton,
  Spinner,
} from '@/components/chat';
import { useChat, useOutsideClick, useToggle } from '@/hooks';

/**
 * Un componente de página principal para una interfaz de chat.
 *
 * @returns {React.JSX.Element} El componente de página del chat renderizado.
 */
const ChatPage = () => {
  const {
    messages,
    reports,
    form,
    inform,
    loading,
    error,
    handleSubmit,
    handleAlertClose,
    handleChange,
    handleInformChange,
    handleChatDelete,
  } = useChat();
  const { toggles, toggle, open, close } = useToggle([
    'showActionsMenu',
    'showReportModal',
    'showDeleteModal',
  ]);
  const ref = useOutsideClick(() => close('showActionsMenu'));

  return (
    <>
      <Chat>
        <Chat.Header>
          <p className="text-body-emphasis rounded-4 fs-5 lh-1 py-2 px-3 mb-0">
            SuperGIA
          </p>
          <div>
            <ActionsMenu
              ref={ref}
              show={toggles.showActionsMenu}
              onToggle={() => toggle('showActionsMenu')}
            >
              <ActionsMenu.Button
                onClick={() => {
                  close('showActionsMenu');
                  open('showReportModal');
                }}
              >
                <i className="bi bi-flag me-2"></i>
                Informar
              </ActionsMenu.Button>
              <ActionsMenu.Button
                variant="delete"
                disabled={!messages.length}
                onClick={() => {
                  close('showActionsMenu');
                  open('showDeleteModal');
                }}
              >
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
            <Alert
              variant="danger"
              message={error}
              onClose={handleAlertClose}
            />
          )}
        </Chat.Body>
        <Chat.Footer onSubmit={handleSubmit}>
          <InputField value={form.question} onChange={handleChange} />
          <SendButton disabled={!form.question || loading} loading={loading} />
        </Chat.Footer>
      </Chat>
      <Modal show={toggles.showReportModal}>
        <Modal.Header
          title="Informar de una conversación"
          onClose={() => close('showReportModal')}
        />
        <Modal.Body>
          <form className="vstack gap-2">
            {reports.map((report, i) => (
              <Radio
                key={i}
                id={'report' + (i + 1)}
                name="reportItems"
                label={report.value}
                value={report.id}
                onChange={handleInformChange}
              />
            ))}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="send"
            disabled={!inform}
            onClick={() => close('showReportModal')}
          >
            Siguiente
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={toggles.showDeleteModal}>
        <Modal.Header title="¿Eliminar chat?" />
        <Modal.Body>
          <p className="mb-0">
            Esto eliminará <b>este chat</b>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-action"
            onClick={() => close('showDeleteModal')}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleChatDelete();
              close('showDeleteModal');
            }}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatPage;
