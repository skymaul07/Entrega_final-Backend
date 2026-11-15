import * as productModel from '../models/product.model.js';

// Obtener todos los productos
export const getAllProductsService = async () => {
  const products = await productModel.getAllProducts();
  
  if (products.length === 0) {
    return { success: true, data: [], message: 'No hay productos registrados' };
  }
  
  return { success: true, data: products, count: products.length };
};

// Obtener un producto por ID
export const getProductByIdService = async (id) => {
  const product = await productModel.getProductById(id);
  
  if (!product) {
    return { success: false, message: `Producto con ID ${id} no encontrado` };
  }
  
  return { success: true, data: product };
};

// Crear un nuevo producto
export const createProductService = async (productData) => {
  if (!productData.title || !productData.price || !productData.category) {
    return { 
      success: false, 
      message: 'Los campos title, price y category son obligatorios' 
    };
  }
  
  if (productData.price <= 0) {
    return { success: false, message: 'El precio debe ser mayor a 0' };
  }
  
  const newProduct = await productModel.createProduct(productData);
  return { success: true, data: newProduct, message: 'Producto creado exitosamente' };
};

// Actualizar un producto
export const updateProductService = async (id, productData) => {
  const product = await productModel.getProductById(id);
  
  if (!product) {
    return { success: false, message: `Producto con ID ${id} no encontrado` };
  }
  
  if (productData.price !== undefined && productData.price <= 0) {
    return { success: false, message: 'El precio debe ser mayor a 0' };
  }
  
  const updatedProduct = await productModel.updateProduct(id, productData);
  return { success: true, data: updatedProduct, message: 'Producto actualizado exitosamente' };
};

// Eliminar un producto
export const deleteProductService = async (id) => {
  const product = await productModel.getProductById(id);
  
  if (!product) {
    return { success: false, message: `Producto con ID ${id} no encontrado` };
  }
  
  await productModel.deleteProduct(id);
  return { success: true, message: `Producto con ID ${id} eliminado correctamente` };
};