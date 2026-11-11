import * as productService from '../services/product.service.js';

// GET /api/products - Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const result = await productService.getAllProductsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
};

// GET /api/products/:id - Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.getProductByIdService(id);
    
    if (!result.success) {
      return res.status(404).json(result);
    }
    
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
};

// POST /api/products - Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const result = await productService.createProductService(productData);
    
    if (!result.success) {
      return res.status(400).json(result);
    }
    
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
};

// DELETE /api/products/:id - Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.deleteProductService(id);
    
    if (!result.success) {
      return res.status(404).json(result);
    }
    
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
};