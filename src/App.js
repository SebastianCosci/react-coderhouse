import NavBar from './components/navbar.js';  // Importa el componente NavBar
import ItemListContainer from './components/itemlistcontainer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <NavBar/> 
         <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </header>
    </div>
  );
}

export default App;



