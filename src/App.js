import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Componentes/NavBar';
import ItemListContainer from './components/Componentes/Container';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header">
        <Routes>
          <Route path='/' element= {<ItemListContainer />}></Route>
          <Route path='contact' element= {<Contact />}></Route>
          <Route path='detail/:id' element={<ItemDetailContainer />}></Route>
        </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
