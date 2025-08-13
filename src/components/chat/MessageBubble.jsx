/**
 * Componente que representa una burbuja de mensaje de usuario en una conversación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.message - El texto que se mostrará dentro de la burbuja del mensaje.
 * @returns {React.JSX.Element} El componente de burbuja de mensaje renderizado.
 */
const MessageBubble = ({ message }) => {
  return (
    <div className="hstack justify-content-end py-4">
      <div className="bg-body-secondary rounded-4 py-2 px-3">
        <p className="mb-0">{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
