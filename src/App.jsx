import { useEffect } from 'react';
import { ChatPage } from '@/pages';

function App() {
  useEffect(() => {
    // Detecta la preferencia del usuario
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const htmlElement = document.documentElement;

    // Establece el atributo data-bs-theme en el elemento <html>
    htmlElement.setAttribute(
      'data-bs-theme',
      userPrefersDark ? 'dark' : 'light'
    );
  }, []);

  return (
    <>
      <ChatPage />
    </>
  );
}

export default App;
