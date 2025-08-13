import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar clicks fuera de un elemento.
 *
 * @param {Function} callback - Función de llamada
 * @param {boolean} enabled - Activo
 */
const useOutsideClick = (callback, enabled = true) => {
  const ref = useRef(null);

  useEffect(() => {
    // Si el hook está deshabilitado, no hacer nada
    if (!enabled) return;

    const handleClickOutside = (event) => {
      // Si el ref no está asignado, no hacer nada
      if (!ref.current) return;

      // Si el click fue fuera del elemento referenciado
      if (!ref.current.contains(event.target)) {
        callback(event);
      }
    };

    // Agregar el event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup: remover el event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback, enabled]);

  return ref;
};

export default useOutsideClick;
