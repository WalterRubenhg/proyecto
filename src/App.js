import './App.css';
import { Routes,Route} from 'react-router-dom';
import Prin from './componentes/Principal/Prin';
import Coreano from './componentes/Paginas/Coreano';
import Aymara from './componentes/Paginas/Aymara';
import Ingles from './componentes/Paginas/Ingles';
import Registro from './componentes/Paginas/Registro';
import Aleman from './componentes/Paginas/Aleman';
import Frances from './componentes/Paginas/Frances';
import Creditos from './componentes/Paginas/Creditos';


function App() {
  return (
    <div >
      <header >
        
        <Routes>
          <Route path='/' element={<Prin/>}>
            <Route path='coreano' element={<Coreano/>}/>
            <Route path='aymara' element={<Aymara/>}/>
            <Route path='aleman' element={<Aleman/>}/>
            <Route path='frances' element={<Frances/>}/>
            <Route path='ingles' element={<Ingles/>}/>
            <Route path='registro' element={<Registro/>}/>
            <Route path='creditos' element={<Creditos/>}/>
          </Route>  
        </Routes>
      </header>
      <footer>
        <h1>
          PAGINA DE IDIOMAS
        </h1>
        <h2>
          WALTER RUBEN HUANQUIRi GUTIERREZ
        </h2>
        <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </footer>
    </div>
    
  );
}

export default App;