//Importamos librerias
const express = require('express');
const router = express.Router();

//Indicamos las rutas de los modulos
router.use('/usuario', require('./usuario.routes'));

//Exportamos el objeto router para ser usado por los demás archivos
module.exports = router;