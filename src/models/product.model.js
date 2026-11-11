import { db } from '../config/firebase.js';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  deleteDoc 
} from 'firebase/firestore';

const COLLECTION_NAME = 'products';

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error(`Error al obtener productos: ${error.message}`);
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    throw new Error(`Error al obtener producto: ${error.message}`);
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), productData);
    return { id: docRef.id, ...productData };
  } catch (error) {
    throw new Error(`Error al crear producto: ${error.message}`);
  }
};

// Eliminar un producto por ID
export const deleteProduct = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return { id, message: 'Producto eliminado correctamente' };
  } catch (error) {
    throw new Error(`Error al eliminar producto: ${error.message}`);
  }
};