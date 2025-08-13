const Spinner = () => {
  return (
    <div className="hstack position-absolute bottom-100 gap-2 mb-1">
      <div class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p className="mb-0">Pensando...</p>
    </div>
  );
};

export default Spinner;
