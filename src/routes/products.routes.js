import { Router } from 'express';
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct,
  deleteProduct 
} from '../controllers/product.controller.js';
import { authentication } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', authentication, getAllProducts);
router.get('/:id', authentication, getProductById);
router.post('/create', authentication, createProduct);
router.put('/:id', authentication, updateProduct);
router.delete('/:id', authentication, deleteProduct);

export default router;