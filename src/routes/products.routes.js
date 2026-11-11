import { Router } from 'express';
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  deleteProduct 
} from '../controllers/product.controller.js';
import { authentication } from '../middlewares/auth.middleware.js'; // <-- ¡IMPORTANTE!

const router = Router();

// Todas las rutas de productos requieren autenticación
router.get('/', authentication, getAllProducts);
router.get('/:id', authentication, getProductById);
router.post('/create', authentication, createProduct);
router.delete('/:id', authentication, deleteProduct);

export default router;