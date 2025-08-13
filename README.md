# Frontend para Aplicación Web de Técnicos

En conjunto, este frontend complementa el backend para brindar una solución completa y escalable, enfocada en mejorar la eficiencia operativa y la trazabilidad de las actividades realizadas por los técnicos, asegurando una gestión robusta y segura de las evidencias.

![Vite](https://img.shields.io/badge/Vite-6.x-9463f7?logo=vite)
![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7A52B3?logo=bootstrap)

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Autor](#autor)
- [Licencia](#licencia)

## Tecnologías

- **Vite** para proporcionar un entorno de desarrollo rápido y moderno con recarga instantánea y construcción optimizada del proyecto.
- **React** para construir la interfaz de usuario del frontend de manera declarativa, modular y eficiente.
- **Bootstrap** para aplicar estilos predefinidos y crear una interfaz responsive y coherente rápidamente.

## Requisitos previos

- **Node.js v22+**
- **npm**

## Estructura del proyecto

```bash
.
├── public/                             # Archivos estáticos públicos
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Chat.jsx                # Vista principal del chat
    │   │   └── index.js                # Exporta componentes de layout
    │   └── ui/
    │       ├── Alert.jsx               # Mensaje de alerta visual
    │       ├── index.js                # Exporta componentes UI
    │       ├── InputField.jsx          # Campo de entrada de texto
    │       ├── MessageBubble.jsx       # Burbuja de mensaje del remitente
    │       ├── MessageText.jsx         # Texto de respuesta
    │       ├── SendButton.jsx          # Botón para enviar mensajes
    │       └── Spinner.jsx             # Indicador de carga
    ├── hooks/
    │   ├── index.js                    # Exporta hooks personalizados
    │   └── useChat.js                  # Lógica personalizada del chat
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
