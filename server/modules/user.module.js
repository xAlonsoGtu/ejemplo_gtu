const UserRepository = {}
const pool = require("../providers/postgres-db");

UserRepository.addUsuario = async (usuario) => {
    //Creamos usuario
    //var sss = new Usuario();
    //console.log(usuario);
    //Creamos query
    try{
        const text = `
            INSERT INTO usuarios (nombre, email, date_created, date_updated, state)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `;
        const values = [usuario.nombre, usuario.email, new Date(), new Date(), 1];
        var res = await pool.query(text, values);

        if(res.rowCount === 0) throw new Error('No data');
        console.log(res);
        return { success: true, payload: res.rows[0] };
    }catch(e){
        console.log(e);
        return { success: false, error: e };
    }
};

UserRepository.getUsuario = async(personId) => {
    try{
        const text = `SELECT * FROM usuarios WHERE id = $1`;
        const values = [personId];
        var res = await pool.query(text, values);

        if(res.rowCount === 0) throw new Error('No data');
        //console.log(res);
        return { success: true, payload: res.rows[0] };
    }catch(e){
        console.log(e);
        return { success: false, error: e };
    }

}

module.exports = UserRepository;