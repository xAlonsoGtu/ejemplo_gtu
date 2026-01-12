//Importamos librerias y componentes
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/shared/noMatch';
import SimpleLayout from './layouts/simpleLayout';

//Caramos en modo lazy (se cargan hasta que se usan), los componentes page
const HomePage = lazy(() => import('./pages/home/homePage'));
const ProductoListPage = lazy(() => import('./pages/producto/productoListPage'));
const ProductoAddPage = lazy(() => import('./pages/producto/productoAddPage'));

//Definimos fucción componente de React
function App() {
  return (
            // Iniciamos rutas
            <Routes>
              {/* Ruta inicial simple */}
              <Route path="" element={<HomePage/>}/>

              {/* Ruta padre con rutas hijas que usan componentes del padre */}
              <Route path="/producto" element={<SimpleLayout />}>
                <Route path="" element={<ProductoListPage/>}/>
                <Route path="add" element={<ProductoAddPage/>}/>
              </Route> 

              {/* Ruta por defecto cuando no coinciden los nombres */}
              <Route path="*" element={<NoMatch />} />
            </Routes> 

  );
}


export default App;
