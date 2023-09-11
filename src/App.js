import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar.js';  // Importa el componente NavBar
import ItemListContainer from './components/itemlistcontainer.js';
import Inicio from './components/inicio.js';
import Contacto from './components/contacto.js';



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
           <NavBar/>
           <Switch>
             <Route path="/home">
               <Inicio/>
             </Route>
             <Route path="/productos">
               <ItemListContainer/>
             </Route>
             <Route path='/contacto'>
              <Contacto/>
             </Route>
           </Switch>            
        </header>
      </div>
    </Router>
  );
}

export default App;



