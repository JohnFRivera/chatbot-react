import { useRef } from 'react';

const InputField = ({ value, onChange }) => {
  const ref = useRef(null);

  const capitalize = (text) => {
    if (!text || typeof text !== 'string') return text; // Si no es texto válido, lo devuelve tal cual
    // Verificar si la primera letra ya es mayúscula
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
      return text; // Si ya está en mayúscula, lo devuelve sin cambios
    }
    // Si no está en mayúscula, la convierte
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

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
      className="form-control border-secondary-subtle rounded-4 overflow-hidden shadow-sm ps-3 py-3"
      style={{ resize: 'none', paddingRight: '3.5rem' }}
      placeholder="Pregunta lo que quieras"
      rows={1}
      value={capitalize(value)}
      onChange={handleChange}
    ></textarea>
  );
};

export default InputField;
