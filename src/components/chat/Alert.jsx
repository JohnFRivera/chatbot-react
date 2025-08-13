/**
 * Un componente de alerta reutilizable y posicionado en la parte inferior de la pantalla.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {'success'|'danger'|'warning'|'info'} props.variant - El estilo de la alerta, que corresponde a los colores de Bootstrap.
 * @param {string} props.message - El mensaje que se mostrará dentro de la alerta.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} props.onClose - La función que se ejecuta cuando el usuario cierra la alerta.
 * @returns {React.JSX.Element} El componente de alerta renderizado.
 */
const Alert = ({ variant, message, onClose }) => {
  const icons = {
    success: 'check-circle',
    danger: 'x-circle',
    warning: 'exclamation-triangle',
    info: 'info-circle',
  };

  return (
    <div
      className={`bg-${variant} bg-opacity-10 border border-${variant} rounded-4 text-${variant}-emphasis py-2 px-3 mb-3`}
    >
      <div className="hstack">
        <i className={`bi bi-${icons[variant]} me-2`}></i>
        <p className="mb-0">{message}</p>
        <button className="nav-link ms-auto" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Alert;
