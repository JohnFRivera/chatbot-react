/**
 * Un botón de envío que muestra un estado de carga y puede ser deshabilitado.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.disabled - Indica si el botón debe estar deshabilitado.
 * @param {boolean} props.loading - Indica si se debe mostrar el estado de carga (spinner).
 * @returns {React.JSX.Element} El componente de botón de envío renderizado.
 */
const SendButton = ({ disabled, loading }) => {
  return (
    <button
      type="submit"
      className="position-absolute bottom-0 end-0 btn btn-send rounded-4 mb-2 me-2"
      disabled={disabled}
    >
      {loading ? (
        <i className="bi bi-stop-fill"></i>
      ) : (
        <i className="bi bi-arrow-up"></i>
      )}
    </button>
  );
};

export default SendButton;
