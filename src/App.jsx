import { useEffect } from 'react';
import { ChatPage } from '@/pages';

function App() {
  useEffect(() => {
    // Crea el media query
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const htmlElement = document.documentElement;

    // Función para actualizar el tema
    const applyTheme = (isDark) => {
      htmlElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    };

    // Establece el tema inicial
    applyTheme(mediaQuery.matches);

    // Escucha los cambios
    const handleChange = (event) => {
      applyTheme(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Limpia el listener al desmontar
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      <ChatPage />
    </>
  );
}

export default App;
