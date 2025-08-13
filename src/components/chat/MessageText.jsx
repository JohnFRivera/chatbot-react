/**
 * Componente para renderizar un mensaje de texto que puede contener formato HTML.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.message - El contenido del mensaje en formato de cadena de texto (string), que puede incluir etiquetas HTML.
 * @returns {React.JSX.Element} El componente de mensaje en HTML renderizado.
 */
const MessageText = ({ message }) => {
  return (
    <div
      className="border-bottom pb-1"
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
};

export default MessageText;
