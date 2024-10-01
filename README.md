
# Proyecto Final - Diplomatura Full Stack ICARO

Este es el proyecto final de la Diplomatura Full Stack de ICARO. El proyecto está dividido en dos carpetas: `frontend` y `backend`, y presenta funcionalidades tanto para la administración de productos (CRUD) como para la interacción de los usuarios con un carrito de compras.

## Estructura del Proyecto

- **Frontend**: Interfaz de usuario para interactuar con los productos, carrito de compras y gestión de usuarios.
- **Backend**: API que maneja la autenticación, gestión de productos y operaciones del carrito, conectada a una base de datos.

## Configuración del Entorno

Para que el backend funcione correctamente, es necesario crear un archivo `.env` dentro de la carpeta `backend` con las siguientes variables de entorno:

```
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_DIALECT=
JWT_SECRET=
PORT=
DB_PORT=
CORS_ORIGIN=http://localhost:3001
```

## Configuración de la Base de Datos

Dentro de la carpeta `config` del backend, encontrarás un archivo `.sql` que puedes usar para hacer un **dump** de la base de datos con los datos ya cargados.

Para cargar los datos:

1. Accede a tu sistema de gestión de bases de datos (como MySQL o MariaDB).
2. Crea una base de datos con el nombre `icarodb` (o el nombre que hayas definido en tu archivo `.env`).
3. Ejecuta el archivo `.sql` para volcar los datos pre-cargados a tu base de datos.

## Instalación

Para comenzar con el proyecto, primero debes instalar las dependencias tanto del frontend como del backend.

1. En la carpeta `frontend`, corre el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

2. En la carpeta `backend`, corre el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Iniciar el Proyecto

Puedes iniciar el servidor del backend y el frontend por separado usando el siguiente comando en cada una de las carpetas correspondientes:

```bash
npm run
```

El frontend se ejecutará en `http://localhost:3001` y el backend en `http://localhost:3030`.

## Funcionalidades

- **Admin (CRUD)**: 
  - El proyecto cuenta con un usuario administrador que puede realizar acciones de creación, lectura, actualización y eliminación de productos. 
  - El administrador puede loguearse con el siguiente usuario:

    - **Correo**: `admin@admin.com`
    - **Contraseña**: `admin`

- **Usuarios**:
  - Los usuarios pueden registrarse, agregar productos al carrito, y realizar compras.
  - Durante el proceso de compra, los usuarios pueden seleccionar si desean envío a domicilio o retiro en sucursal.

## Notas Adicionales

- Asegúrate de que el servidor y el frontend estén corriendo simultáneamente para poder interactuar correctamente con el sistema.
- La aplicación tiene protección con JWT para manejar la autenticación de usuarios y administradores.

¡Gracias por revisar este proyecto!
