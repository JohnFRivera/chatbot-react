import { useRef } from 'react';

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
   * Evento al textarea cambiar de valor.
   * @param {React.InputEvent} e - Evento
   */
  const handleChange = (e) => {
    onChange && onChange(e);
    const textarea = ref.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

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
