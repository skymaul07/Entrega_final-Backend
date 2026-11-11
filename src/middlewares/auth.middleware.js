import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  // Obtener el token del header
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'No se proporcionó token de autenticación'
    });
  }

  // El formato es "Bearer <token>"
  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token mal formado'
    });
  }

  // Verificar el token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Token inválido o expirado'
      });
    }
    
    // Si es válido, agregar el usuario decodificado al request
    req.user = decoded;
    next();
  });
};