import { useRef, useEffect } from 'react';

/**
 * Un componente de campo de entrada de texto (`textarea`) con auto-ajuste de altura y capitalización de la primera letra.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.value - El valor actual del `textarea`.
 * @param {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} props.onChange - La función que se llama cuando el valor del `textarea` cambia.
 * @returns {React.JSX.Element} El componente de entrada de texto renderizado.
 */
const InputField = ({ value, onChange }) => {
  const ref = useRef(null);

  /**
   * Capitalizar solo la primer litra de un texto.
   * @param {string} text - Texto de entrada
   * @returns {string} Texto capitalizado
   */
  const capitalize = (text) => {
    if (!text || typeof text !== 'string') return text; // Si no es texto válido, lo devuelve tal cual
    // Verificar si la primera letra ya es mayúscula
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
      return text; // Si ya está en mayúscula, lo devuelve sin cambios
    }
    // Si no está en mayúscula, la convierte
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  /**
   * Ajustar tamaño del `textarea`.
   */
  const adjustSize = () => {
    const textarea = ref.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  /**
   * Evento al `textarea` cambiar de valor.
   * @param {React.InputEvent} e - Evento
   */
  const handleChange = (e) => {
    onChange && onChange(e);
    adjustSize();
  };

  // Ajustar tamaño al renderizar componente.
  useEffect(() => adjustSize(), []);

  return (
    <textarea
      ref={ref}
      name="question"
      className="form-control bg-body-tertiary border-secondary-subtle rounded-4 overflow-hidden shadow-sm ps-3 py-3"
      style={{ resize: 'none', paddingRight: '3.5rem' }}
      placeholder="Pregunta lo que quieras"
      rows={1}
      value={capitalize(value)}
      onChange={handleChange}
    ></textarea>
  );
};

export default InputField;
