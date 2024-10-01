const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded;  
        next(); 
    } catch (error) {
        console.error('Error al verificar el token:', error); 
        return res.status(403).json({ error: 'Token inválido o expirado.' });
    }
};
