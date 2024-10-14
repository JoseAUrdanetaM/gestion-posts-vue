**Frontend - Post Management Application**

Este es el frontend de la aplicación de gestión de posts, desarrollado con Vue 3 y Vite. Proporciona una interfaz para usuarios estándar, administradores y usuarios de solo lectura, con funcionalidades de autenticación, autorización y manejo de roles.

**Requisitos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

    Node.js (versión 14 o superior)
    npm o yarn como gestor de paquetes

**Instalación**

    Clona este repositorio en tu máquina local:

    git clone https://github.com/usuario/repositorio-frontend.git

    Navega al directorio del proyecto:

    cd repositorio-frontend

    Instala las dependencias necesarias:

    Con npm:

    npm install

    Con yarn:

    yarn install

**Configuración**

    Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

    VITE_API_URL=http://localhost:8000/api

    Asegúrate de que VITE_API_URL apunte a la URL del backend (Laravel) de tu proyecto.

**Ejecución del proyecto en modo de desarrollo**

Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

Con npm:

npm run dev

Con yarn:

yarn dev

Esto levantará el servidor de desarrollo de Vite. Por defecto, estará disponible en http://localhost:3000.

**Compilación para producción**

Para construir la aplicación para producción, ejecuta:

Con npm:

npm run build

Con yarn:

yarn build

Esto generará una carpeta dist con los archivos estáticos optimizados listos para ser desplegados.

**Estructura del Proyecto**

    src/components/: Contiene todos los componentes reutilizables, como el Sidebar, Card, Modal, etc.
    src/views/: Contiene las vistas de la aplicación, que representan las páginas principales, como el blog y los paneles de usuario y administrador.
    src/router/: Configuración de las rutas de Vue Router.
    src/services/: Contiene los archivos de servicios para la interacción con la API.
    src/store/: (Opcional) Si usas un gestor de estado como Vuex o Pinia.
