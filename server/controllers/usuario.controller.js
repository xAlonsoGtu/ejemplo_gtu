//Declaramos un objeto controller
const usuarioCtrl = {};

//Importamos librerias
const UserRepository = require('../modules/user.module.js');

//Creamos función asincrona(promesa) con parámetros req(petición http con head, body) y res(respuesta servidor)
usuarioCtrl.addUsuario = async (req, res) => {
	try{
        //Obtenemos valores del body
        console.log(req.body);
        const user = req.body;

        //Mandamos llamar funciones del repositorio usuario 
        var rQuery = await UserRepository.addUsuario(user);

        //Evaluamos respuesta
        if(rQuery.success){
            //Enviamos objeto de respuesta ok positiva
            res.status(200).send({ success: true, payload: rQuery.payload });
        }else{
            //Enviamos objeto de respuesta nok negativa
            res.status(400).send(rQuery);
        }
    }
    catch(e){
        //Si hay error lo mostramos
        console.log(e);

        //Enviamos mensaje error
        res.status(400).send({ success: false, error: e.message});
    }
}

module.exports = usuarioCtrl;
