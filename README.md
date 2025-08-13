# Frontend de Chatbot Contextual con RAG y Ollama

Experiencia de chat moderna y responsiva para interactuar con un backend inteligente basado en LangChain y Ollama. El sistema aprovecha la tecnología RAG (Retrieval-Augmented Generation) para entregar respuestas precisas, contextualizadas y alineadas a una base de conocimiento personalizada.

![Vite](https://img.shields.io/badge/Vite-6.x-9463f7?logo=vite)
![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7A52B3?logo=bootstrap)

## Tabla de contenidos

1. [Tecnologías](#tecnologías)
2. [Requisitos previos](#requisitos-previos)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Instalación](#instalación)
5. [Ejecución](#ejecución)
6. [Autor](#autor)
7. [Licencia](#licencia)

## Tecnologías

- **Vite** para proporcionar un entorno de desarrollo rápido y moderno con recarga instantánea y construcción optimizada del proyecto.
- **React** para construir la interfaz de usuario del frontend de manera declarativa, modular y eficiente.
- **Bootstrap** para aplicar estilos predefinidos y crear una interfaz responsive y coherente rápidamente.
- **Bootstrap Icons** para incorporar íconos visuales consistentes y ligeros en la interfaz de usuario.

## Requisitos previos

- **Node.js v22+**
- **npm**

## Estructura del proyecto

```bash
.
├── public/                             # Archivos estáticos públicos
└── src/
    ├── components/
    │   ├── auth/
    │   └── chat/
    │       ├── ActionsMenu.jsx         # Menú de acciones disponibles en el chat
    │       ├── Alert.jsx               # Mensaje de alerta visual
    │       ├── Chat.jsx                # Vista principal del chat
    │       ├── index.js                # Exporta componentes UI
    │       ├── InputField.jsx          # Campo de entrada de texto
    │       ├── MessageBubble.jsx       # Burbuja de mensaje del remitente
    │       ├── MessageText.jsx         # Texto de respuesta
    │       ├── SendButton.jsx          # Botón para enviar mensajes
    │       └── Sidebar.jsx             # Panel lateral con opciones y contactos
    │       └── Spinner.jsx             # Indicador de carga
    ├── hooks/
    │   ├── index.js                    # Exporta hooks personalizados
    │   └── useAuth.js                  # Hook para manejar autenticación y sesión
    │   └── useChat.js                  # Lógica personalizada del chat
    ├── pages/
    │   ├── AuthPage.js                 # Página de inicio de sesión / registro
    │   └── ChatPage.js                 # Página que renderiza la vista de chat
    │   └── index.js                    # Exporta páginas
    ├── App.jsx
    └── main.jsx
```

## Instalación

```bash
git clone https://github.com/JohnFRivera/chatbot-react.git
cd chatbot-react
npm install
```

## Ejecución

Modo **desarrollo**:

```bash
npm run dev
```

Modo **producción**:

```bash
npm run build
```

Luego de construir la aplicación, los archivos estáticos generados en la carpeta `dist/` deben ser desplegados y servidos usando un servidor web como **Nginx** o similar, configurado para servir contenido estático.

## Autor

Este proyecto fue desarrollado por **John Freddy Rivera**.

## Licencia

Este código es propiedad de **John Freddy Rivera** y su uso está restringido a fines internos. No está permitido su uso, distribución o modificación sin autorización expresa por escrito.
