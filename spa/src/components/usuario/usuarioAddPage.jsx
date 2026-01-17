import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UsuarioService } from './usuario.service';
import { UsuarioFormAgregar } from '../../models/usuario/usuario';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';

const UsuarioAddPage = () => {
    //Definimos objetos de estado
    const [nombre, setNombre] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [mensaje, setMensaje] = React.useState('');

    //Creamos objeto servicio
    const usuarioService = new UsuarioService();

    //Creamos manejadores de los estados
    function handleInputNombre(e){
        setNombre(e.target.value);
    }

    function handleInputEmail(e){
        setEmail(e.target.value);
    }
    
    //Creamos accion del submit
    async function handleSubmit(e) {
        //Modificanmos comportamiento por defecto del submit
        e.preventDefault();
        setStatus('cargando');
        try {
            //Creamos objeto
            var form = new UsuarioFormAgregar();
            form.nombre = nombre;
            form.email = email;

            //Llamamos la función add que llama al API
            var res = await usuarioService.addUsuario(form);

            //Imprimimos resultados
            console.log(res);
            setStatus('ok');
            setMensaje('Usuario creado con el id: ' + res.payload.id)
        } catch (err) {
            setStatus('nok');
        }
    }

	return (
        <Box sx={{ flexGrow: 1, padding:2 }}>
        <Grid container spacing={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
                        Agregar usuario
                    </Typography>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField fullWidth
                                variant="outlined" className='bg-white'
                                id="input-user" required
                                size="small"
                                label="Nombre" 
                                value={nombre} onChange={handleInputNombre}
                            />
                            <TextField fullWidth
                                variant="outlined" className='bg-white'
                                id="input-user" required 
                                size="small"
                                label="Email" 
                                value={email} onChange={handleInputEmail}
                            />
                            <Button 
                                fullWidth
                                loading = {status === 'cargando'} 
                                loadingPosition="start"
                                endIcon={<SaveOutlinedIcon />}
                                variant="contained"
                                size="large"
                                //disabled={status === 'cargando'} 
                                type="submit"
                                color="orange"
                                >Guardar
                            </Button>
                        </Stack>
                    </form>
                    <br />
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
                        {mensaje}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </Box>
	);
};

export default UsuarioAddPage;