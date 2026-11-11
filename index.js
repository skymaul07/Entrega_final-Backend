import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Importar routers
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// MIDDLEWARES GLOBALES
// ==========================================
app.use(cors());
app.use(express.json());

// ==========================================
// RUTAS
// ==========================================
app.use('/auth', authRouter);
app.use('/api/products', productsRouter);

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Bienvenido a la API de SkymaulAPI - Entrega Final Backend',
    status: 'online'
  });
});

// ==========================================
// MANEJO DE RUTAS NO ENCONTRADAS (404)
// ==========================================
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `La ruta ${req.method} ${req.url} no existe en este servidor`
  });
});

// ==========================================
// LEVANTAR EL SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});