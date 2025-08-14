const Modal = ({ show, children }) => {
  return (
    show && (
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-10 backdrop-blur">
        <div className="row h-100">
          <div className="col col-xxl-3 mx-auto">
            <div className="d-flex h-100 align-items-center">
              <div className="w-100 bg-body-tertiary border rounded-4 shadow p-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Modal.Header = ({ title, onClose }) => {
  return (
    <div className="hstack justify-content-between mb-3">
      <label className="fw-normal fs-5 mb-0">{title}</label>
      {onClose && (
        <button
          type="button"
          className="btn btn-sm btn-action rounded-circle"
          onClick={onClose}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      )}
    </div>
  );
};

Modal.Body = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

Modal.Footer = ({ children }) => {
  return (
    <div className="hstack justify-content-end gap-2 mt-3">{children}</div>
  );
};

export default Modal;
