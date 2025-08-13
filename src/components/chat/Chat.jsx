/**
 * Un componente contenedor principal para una interfaz de chat.
 *
 * @returns {React.JSX.Element} El componente de chat renderizado.
 */
const Chat = ({ children }) => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div
          id="chat-container"
          className="col position-relative vh-100 overflow-y-scroll"
        >
          {children}
        </div>
      </div>
    </main>
  );
};

/**
 * Un subcomponente para el encabezado del chat.
 *
 * @returns {React.JSX.Element} El componente de encabezado del chat renderizado.
 */
Chat.Header = ({ children }) => {
  return <div className="position-absolute start-0 top-0">{children}</div>;
};

/**
 * Un subcomponente para el cuerpo principal del chat.
 *
 * @returns {React.JSX.Element} El componente de cuerpo principal del chat renderizado.
 */
Chat.Body = ({ children }) => {
  return (
    <div style={{ paddingBottom: '14vh' }}>
      <div className="row">
        <div className="col-5 mx-auto">{children}</div>
      </div>
    </div>
  );
};

/**
 * Un subcomponente para el pie de página del chat que contiene el formulario de entrada.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {(e: React.FormEvent<HTMLFormElement>) => void} props.onSubmit - La función que se ejecuta cuando se envía el formulario (al presionar Enter o el botón de envío).
 * @returns {React.JSX.Element} El componente de pie de página del chat renderizado.
 */
Chat.Footer = ({ onSubmit, children }) => {
  return (
    <div className="position-fixed start-0 bottom-0 w-100">
      <div className="row">
        <div className="col-5 mx-auto">
          <div className="position-relative pb-1">
            <div className="position-absolute start-0 bottom-0 w-100 h-75 bg-body z-n1"></div>
            <form className="position-relative" onSubmit={onSubmit}>
              {children}
            </form>
            <p className="small text-center mt-1 mb-0">
              Esta IA puede cometer errores. Considera verificar la información
              importante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
