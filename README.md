# Concesionario Frontend

## Descripción

El proyecto Concesionario es una interfaz de usuario desarrollada con Vue.js. Está diseñada para proporcionar una experiencia de usuario fluida y dinámica para la gestión de un concesionario de vehículos.

## Cómo Empezar

### Requisitos Previos

- Node.js (versión recomendada 12 o superior)
- Gestor de paquetes (npm o yarn)

### Instalación y Ejecución

1. Clonar el repositorio: git clone https://github.com/Javivzk/TaesMotors-Vue.git
2. Navegar al directorio del proyecto: cd Concesionario
3. Instalar las dependencias: npm install
4. Ejecutar el servidor de desarrollo: npm run dev

## Estructura del Proyecto

- **.git/.gitignore**: Configuraciones de control de versiones.
- **formkit.config.js**: Configuración para FormKit.
- **index.html**: Página HTML raíz.
- **node_modules**: Módulos de Node.js.
- **package.json/package-lock.json**: Configuración de Node.js y lista de dependencias.
- **postcss.config.js**: Configuración para PostCSS.
- **public**: Archivos estáticos.
- **src**: Código fuente de Vue.js, incluyendo componentes y vistas.
- **tailwind.config.js**: Configuración para Tailwind CSS.
- **vite.config.js**: Configuración para Vite.


## Arquitectura del Proyecto


El frontend de "taesmotors" está construido utilizando Vue.js, enfocado en proporcionar una experiencia de usuario fluida y responsiva. Los componentes clave incluyen:

* **Componentes de la Interfaz de Usuario (UI)** : Utiliza HeadlessUI para crear una interfaz de usuario interactiva y atractiva. Los componentes están organizados modularmente, permitiendo reutilización y mantenimiento eficiente.
* **Gestión del Estado** : Maneja el estado de la aplicación con Pinia, lo que facilita el manejo de datos a través de los componentes.
* **Enrutamiento** : Utiliza Vue Router para gestionar la navegación entre diferentes vistas o páginas de la aplicación.
* **Comunicación con el Backend** : Implementa servicios para interactuar con la API del backend, utilizando Axios para las solicitudes HTTP.
* **Autenticación y Autorización** : Integra mecanismos para gestionar el acceso de los usuarios, trabajando en conjunto con el sistema de seguridad del backend.

## Tecnologias

- Vue.js
- Pinia
- Vue Router
- Axios
- TailwindCSS
- Vite
- PostCSS
- HeadlessUI
- Formkit
- SweetAlert2

## Autor

- Javier Vizcaino Olivares
