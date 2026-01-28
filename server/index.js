//Importamos librerias
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index.routes');

//Identificamos si estamos en modo producción o develop
const nodeEnv = process.env.NODE_ENV || 'development';
console.log(`Running in ${nodeEnv} mode`);

//Obtenemos puerto por defecto
const PORT = process.env.PORT || 3001;

//Creamos express
const app = express();

//Configuraciones de express
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Indicamos ruta principal del servidor API
app.use('/api', indexRouter);

//Iniciamos servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//Hola este es un cambio