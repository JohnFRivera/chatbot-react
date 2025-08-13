const Alert = ({ variant, message, onClose }) => {
  return (
    <div className="position-absolute bottom-100 w-100">
      <div
        className={`bg-${variant} bg-opacity-10 border border-${variant} rounded-4 text-${variant}-emphasis py-2 px-3 mb-3`}
      >
        <div className="hstack">
          <p className="mb-0">{message}</p>
          <button className="btn-close shadow-none ms-auto" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Alert;
