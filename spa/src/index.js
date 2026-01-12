import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

//Creamos estilo theme para aplicar a los componentes de material en react
const theme = createTheme({
  palette: {
    orange: {
      main: '#EC7425',
      light: '#de8f5aff',
      dark: '#d6661bff',
      contrastText: '#ffffffff',
    },
  },
});

//El dom de react se inicia en el componente con el id root
const root = ReactDOM.createRoot(document.getElementById('root'));

//Se crean (render) los componentes
root.render(
  // Definimos strict mode para hacer pruebas, en producción desaparece en automático
  <React.StrictMode>
    {/* Componente de Marterial para cargar los estilos theme */}
    <ThemeProvider theme={theme}>
      {/* Componente de Router para indicar las rutas que usaremos */}
      <BrowserRouter>
        {/* Componente de inicio */}
         <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
