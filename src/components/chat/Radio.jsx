const Radio = ({ id, name, label, value, onChange }) => {
  return (
    <div className="form-check">
      <input
        type="radio"
        id={id}
        name={name}
        className="form-check-input shadow-sm"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label w-100">
        {label}
      </label>
    </div>
  );
};

export default Radio;
