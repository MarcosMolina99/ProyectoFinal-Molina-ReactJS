import logo from './logo.svg';
import './App.css';
import NavBar from './components/Componentes/NavBar';
import ItemListContainer from './components/Componentes/Container';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemDetailContainer />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
