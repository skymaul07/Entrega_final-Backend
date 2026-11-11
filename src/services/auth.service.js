import jwt from 'jsonwebtoken';

// Usuario de prueba (en producción vendría de una base de datos)
const USER = {
  id: '1',
  email: 'admin@skymaul.com',
  password: 'admin123'
};

export const loginService = async (email, password) => {
  // Verificar credenciales
  if (email !== USER.email || password !== USER.password) {
    return { 
      success: false, 
      message: 'Credenciales inválidas',
      status: 401
    };
  }

  // Generar token JWT
  const token = jwt.sign(
    { id: USER.id, email: USER.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1h' }
  );

  return {
    success: true,
    data: {
      token,
      user: { id: USER.id, email: USER.email }
    },
    message: 'Login exitoso'
  };
};