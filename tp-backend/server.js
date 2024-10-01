const sequelize = require('./config/database');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Cargar variables de entorno

const app = express();

// Usar el puerto desde las variables de entorno o un valor por defecto
const port = process.env.PORT || 3000;

// Configurar CORS utilizando las variables de entorno
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

// Configurar ruta estática para imágenes
app.use('/assets/images', express.static(path.join(__dirname, 'src/assets/images')));

// Usar rutas desde el archivo de rutas
app.use('/api', require('./routes'));

// Iniciar conexión a la base de datos y sincronización de modelos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a base de datos exitosa.');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }

    try {
        await sequelize.sync({ alter: false });
        console.log('Los modelos han sido sincronizados y las tablas han sido actualizadas.');
    } catch (error) {
        console.error('Error al sincronizar modelos:', error);
    }

    // Iniciar el servidor en el puerto especificado
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
})();
