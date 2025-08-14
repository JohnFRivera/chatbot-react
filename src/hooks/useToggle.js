import { useState, useCallback, useMemo } from 'react';

/**
 * Custom hook para manejar múltiples toggles.
 *
 * @param {object|Array} initialToggles - Objeto con toggles iniciales o array de nombres
 * @param {object} options - Opciones adicionales
 */
const useToggle = (initialToggles = {}, options = {}) => {
  const { defaultValue = false, autoClose = {}, exclusive = false } = options;

  // Normalizar los toggles iniciales
  const normalizedInitial = useMemo(() => {
    if (Array.isArray(initialToggles)) {
      return initialToggles.reduce((acc, name) => {
        acc[name] = defaultValue;
        return acc;
      }, {});
    }
    return { ...initialToggles };
  }, [initialToggles, defaultValue]);

  const [toggles, setToggles] = useState(normalizedInitial);

  // Alternar un toggle específico
  const toggle = useCallback(
    (name) => {
      setToggles((prev) => {
        const newToggles = { ...prev };

        // Si es exclusivo, cerrar todos los demás
        if (exclusive && !prev[name]) {
          Object.keys(newToggles).forEach((key) => {
            if (key !== name) {
              newToggles[key] = false;
            }
          });
        }

        newToggles[name] = !prev[name];
        return newToggles;
      });
    },
    [exclusive]
  );

  // Abrir un toggle específico
  const open = useCallback(
    (name) => {
      setToggles((prev) => {
        const newToggles = { ...prev };

        // Si es exclusivo, cerrar todos los demás
        if (exclusive) {
          Object.keys(newToggles).forEach((key) => {
            if (key !== name) {
              newToggles[key] = false;
            }
          });
        }

        newToggles[name] = true;
        return newToggles;
      });

      // Auto-cierre si está configurado
      if (autoClose[name]) {
        setTimeout(() => {
          setToggles((prev) => ({
            ...prev,
            [name]: false,
          }));
        }, autoClose[name]);
      }
    },
    [exclusive, autoClose]
  );

  // Cerrar un toggle específico
  const close = useCallback((name) => {
    setToggles((prev) => ({
      ...prev,
      [name]: false,
    }));
  }, []);

  // Establecer un toggle a un valor específico
  const set = useCallback(
    (name, value) => {
      setToggles((prev) => {
        const newToggles = { ...prev };

        // Si es exclusivo y se está abriendo, cerrar todos los demás
        if (exclusive && value) {
          Object.keys(newToggles).forEach((key) => {
            if (key !== name) {
              newToggles[key] = false;
            }
          });
        }

        newToggles[name] = Boolean(value);
        return newToggles;
      });
    },
    [exclusive]
  );

  // Abrir múltiples toggles
  const openMultiple = useCallback(
    (names) => {
      if (exclusive) {
        console.warn(
          'openMultiple no se puede usar con la opción exclusive activada'
        );
        return;
      }

      setToggles((prev) => {
        const newToggles = { ...prev };
        names.forEach((name) => {
          newToggles[name] = true;
        });
        return newToggles;
      });
    },
    [exclusive]
  );

  // Cerrar múltiples toggles
  const closeMultiple = useCallback((names) => {
    setToggles((prev) => {
      const newToggles = { ...prev };
      names.forEach((name) => {
        newToggles[name] = false;
      });
      return newToggles;
    });
  }, []);

  // Cerrar todos los toggles
  const closeAll = useCallback(() => {
    setToggles((prev) => {
      const newToggles = {};
      Object.keys(prev).forEach((key) => {
        newToggles[key] = false;
      });
      return newToggles;
    });
  }, []);

  // Abrir todos los toggles (solo si no es exclusivo)
  const openAll = useCallback(() => {
    if (exclusive) {
      console.warn('openAll no se puede usar con la opción exclusive activada');
      return;
    }

    setToggles((prev) => {
      const newToggles = {};
      Object.keys(prev).forEach((key) => {
        newToggles[key] = true;
      });
      return newToggles;
    });
  }, [exclusive]);

  // Resetear a los valores iniciales
  const reset = useCallback(() => {
    setToggles(normalizedInitial);
  }, [normalizedInitial]);

  // Agregar un nuevo toggle dinámicamente
  const addToggle = useCallback(
    (name, initialValue = defaultValue) => {
      setToggles((prev) => ({
        ...prev,
        [name]: initialValue,
      }));
    },
    [defaultValue]
  );

  // Remover un toggle
  const removeToggle = useCallback((name) => {
    setToggles((prev) => {
      const newToggles = { ...prev };
      delete newToggles[name];
      return newToggles;
    });
  }, []);

  // Obtener props para usar con elementos (útil para checkboxes, switches)
  const getToggleProps = useCallback(
    (name) => ({
      checked: Boolean(toggles[name]),
      onChange: () => toggle(name),
    }),
    [toggles, toggle]
  );

  // Verificar si algún toggle está activo
  const hasActiveToggle = useMemo(() => {
    return Object.values(toggles).some((value) => value);
  }, [toggles]);

  // Contar toggles activos
  const activeCount = useMemo(() => {
    return Object.values(toggles).filter((value) => value).length;
  }, [toggles]);

  // Obtener nombres de toggles activos
  const activeToggles = useMemo(() => {
    return Object.keys(toggles).filter((name) => toggles[name]);
  }, [toggles]);

  return {
    // Estados
    toggles,
    hasActiveToggle,
    activeCount,
    activeToggles,

    // Funciones principales
    toggle,
    open,
    close,
    set,

    // Funciones múltiples
    openMultiple,
    closeMultiple,
    openAll,
    closeAll,

    // Funciones de gestión
    reset,
    addToggle,
    removeToggle,

    // Helpers
    getToggleProps,

    // Funciones de conveniencia (aliases comunes)
    show: open,
    hide: close,
    isOpen: (name) => Boolean(toggles[name]),
    isClosed: (name) => !toggles[name],
  };
};

export default useToggle;
