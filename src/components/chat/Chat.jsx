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

Chat.Header = ({ children }) => {
  return <div className="position-absolute start-0 top-0">{children}</div>;
};

Chat.Body = ({ children }) => {
  return (
    <div style={{ paddingBottom: '14vh' }}>
      <div className="row">
        <div className="col-5 mx-auto">{children}</div>
      </div>
    </div>
  );
};

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
