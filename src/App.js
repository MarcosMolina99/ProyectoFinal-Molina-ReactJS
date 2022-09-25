import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Componentes/NavBar';
import ItemListContainer from './components/Componentes/Container';
import ItemDetailContainer from './components/Componentes/ItemDetailContainer';
import Contact from './pages/Contact';
import {CartProvider} from './components/context/CartProvider';
import Cart from './components/Componentes/Cart';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <header className="App-header">
          <Routes>
            <Route path='/' element= {<ItemListContainer />}></Route>
            <Route path='contact' element= {<Contact />}></Route>
            <Route path='detail/:id' element={<ItemDetailContainer />}></Route>
            <Route path='category/:categoryName' element={<ItemListContainer />}></Route>
            <Route path='cart' element= {<Cart />}></Route>
          </Routes>
          </header>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
