# 🚀 SkymaulAPI - Proyecto Final Backend (TechLab)

API RESTful para la gestión de productos de una tienda en línea, desarrollada como proyecto final integrador del curso de Backend en Node.js de TechLab. Este proyecto aplica buenas prácticas de desarrollo, arquitectura en capas y seguridad para ofrecer un servicio escalable y mantenible.

## 🛠️ Tecnologías Utilizadas
- Node.js (Entorno de ejecución)
- Express.js (Framework web)
- Firebase Firestore (Base de datos NoSQL en la nube)
- JSON Web Token - JWT (Autenticación y autorización)
- dotenv (Manejo de variables de entorno)
- cors (Manejo de solicitudes entre dominios)
- ES Modules (Sintaxis moderna de importación/exportación)

## 🏗️ Arquitectura del Proyecto
El proyecto sigue una arquitectura en capas para garantizar la separación de responsabilidades, la escalabilidad y el fácil mantenimiento del código:
1. Rutas (routes/): Definen los endpoints de la API y los vinculan a los controladores.
2. Controladores (controllers/): Manejan la solicitud HTTP, extraen los datos y envían la respuesta al cliente.
3. Servicios (services/): Contienen la lógica de negocio y las validaciones de los datos.
4. Modelos (models/): Se encargan de la interacción directa con la base de datos (Firebase Firestore).
5. Middlewares (middlewares/): Funciones intermedias, como la verificación del token JWT.

## ⚙️ Instalación y Configuración Local
Sigue estos pasos para ejecutar el proyecto en tu máquina:

1. Navega a la carpeta del proyecto:
   cd Entrega_final-Backend

2. Instala las dependencias:
   npm install

3. Configura las variables de entorno:
   Crea un archivo llamado .env en la raíz del proyecto y completa tus credenciales de Firebase y la clave secreta de JWT:
   
   PORT=3000
   JWT_SECRET_KEY=tu_clave_secreta_super_segura
   FIREBASE_API_KEY=tu_api_key
   FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   FIREBASE_PROJECT_ID=tu_project_id
   FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
   FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   FIREBASE_APP_ID=tu_app_id

4. Inicia el servidor:
   npm run start
   (El servidor quedará disponible en http://localhost:3000)

## 🔌 Endpoints de la API
Nota: Todas las rutas de productos requieren un token de autenticación válido en el header: Authorization: Bearer <tu_token>

- POST /auth/login : Inicia sesión y devuelve un token JWT. Body: { "email": "admin@skymaul.com", "password": "admin123" }
- GET /api/products : Obtiene la lista completa de productos.
- GET /api/products/:id : Obtiene un producto específico por su ID.
- POST /api/products/create : Crea un nuevo producto en la base de datos.
- DELETE /api/products/:id : Elimina un producto existente por su ID.

## 🧪 Pruebas
Se recomienda utilizar herramientas como Postman, Thunder Client (extensión de VS Code) o la terminal para probar los endpoints. 

Flujo de prueba recomendado:
1. Realiza un POST a /auth/login con las credenciales de prueba.
2. Copia el token recibido en la respuesta.
3. Agrega el header Authorization: Bearer <token> a tus siguientes peticiones.
4. Realiza un GET a /api/products para verificar el acceso autorizado.

## 👨‍💻 Autor
Desarrollado por Manuel como parte del Proyecto Final del curso de Backend en Node.js de TechLab. Aplicando conceptos de arquitectura limpia, seguridad con JWT y bases de datos en la nube.