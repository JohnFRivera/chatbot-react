const Spinner = () => {
  return (
    <div className="hstack gap-2">
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-body mb-0">Pensando...</p>
    </div>
  );
};

export default Spinner;
