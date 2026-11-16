# 🚀 SkymaulAPI - Entrega Final Backend Node.js

API REST para la gestión de productos (CRUD) con autenticación JWT y base de datos en la nube (Firebase Firestore). Proyecto final del curso de Backend con Node.js - Talento Tech.

## 🌐 Deploy (Producción)
**URL Pública:** https://entrega-final-backend-8lzx.onrender.com

> ⚠️ Nota: Al estar en el plan gratuito de Render, la primera petición tras un periodo de inactividad puede tardar ~50 segundos en despertar el servidor.

## 🧱 Arquitectura en Capas
- **Routes** → src/routes/
- **Controllers** → src/controllers/
- **Services** → src/services/
- **Models** → src/models/
- **Middlewares** → src/middlewares/
- **Config** → src/config/

## 🔧 Instalación
1. npm install
2. npm run start

## 📡 Endpoints de la API
| Método | Ruta | Descripción | Protección |
| :--- | :--- | :--- | :--- |
| POST | /auth/login | Devuelve Bearer Token | Público |
| GET | /api/products | Lista todos los productos | JWT |
| GET | /api/products/:id | Obtiene un producto por ID | JWT |
| POST | /api/products/create | Crea un nuevo producto | JWT |
| PUT | /api/products/:id | Actualiza un producto | JWT |
| DELETE | /api/products/:id | Elimina un producto | JWT |

## 🔐 Credenciales de Prueba
- **Email:** admin@skymaul.com
- **Password:** admin123

## ⚙️ Variables de Entorno
El proyecto requiere un archivo .env en la raíz con las variables PORT, JWT_SECRET_KEY y las credenciales de Firebase. Este archivo NO se sube al repositorio por seguridad.