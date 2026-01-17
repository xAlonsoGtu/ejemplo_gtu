//Importamos librerias
const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuario.controller");

//Indicamos las rutas de los modulos
router.post('/add', controller.addUsuario);
//router.get('/list', auth.verifyToken, controller.);
//router.put('/edit', controller.);

//Exportamos el objeto router para ser usado por los demás archivos
module.exports = router;