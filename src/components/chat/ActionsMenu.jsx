/**
 * Componente que renderiza un menú de acciones con un botón de tres puntos (menú kebab).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.Ref} props.ref - Indica si el menú desplegable debe estar visible.
 * @param {boolean} props.show - Indica si el menú desplegable debe estar visible.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} props.onToggle - Función que se ejecuta al hacer clic en el botón para alternar el estado del menú.
 * @returns {React.JSX.Element} El componente de menú de acciones renderizado.
 */
const ActionsMenu = ({ ref, show, onToggle, children }) => {
  return (
    <div ref={ref} className="position-relative">
      <button
        type="button"
        className="btn btn-menu rounded-4"
        onClick={onToggle}
      >
        <i className="bi bi-three-dots"></i>
      </button>
      {show && (
        <div className="position-absolute top-100 end-0">
          <div className="bg-body-tertiary border rounded-4 shadow-sm p-1">
            <div className="vstack">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Subcomponente para renderizar un botón dentro del menú de acciones.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {'action'|'delete'} props.variant - El estilo del botón, que corresponde a los colores de Bootstrap.
 * @param {boolean} props.disabled - Indica si el botón debe estar deshabilitado.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Función que se ejecuta al hacer clic en el botón.
 * @returns {React.JSX.Element} El componente de menú de acciones renderizado.
 */
ActionsMenu.Button = ({ variant = 'action', disabled, onClick, children }) => {
  return (
    <button
      className={`btn btn-${variant} rounded-4 text-nowrap pe-4`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionsMenu;
