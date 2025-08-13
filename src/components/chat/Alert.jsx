/**
 * Un componente de alerta reutilizable y posicionado en la parte inferior de la pantalla.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} props.variant - El estilo de la alerta, que corresponde a los colores de Bootstrap.
 * @param {string} props.message - El mensaje que se mostrará dentro de la alerta.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} props.onClose - La función que se ejecuta cuando el usuario cierra la alerta.
 * @returns {React.JSX.Element} El componente de alerta renderizado.
 */
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
