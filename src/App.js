import './App.css';
import Contacto from './Pages/Contacto/Contacto';
import Inicio from './Pages/Inicio/Inicio';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import Nosotros from './Pages/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from './Context/CartContext';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

function App() {

  const [carrito, setCarrito] = useState([]);

  const [contador, setContador] = useState(0)

  const contadorDeProductos = () => {
    const numero = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    setContador(numero)
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

  return (
    <div className="App">
      <CartContext.Provider value={ {carrito, setCarrito, contadorDeProductos, contador, vaciarCarrito, precioTotal}}>
        <BrowserRouter> 
        <Navbar />
          <Routes>
            <Route path='/' element={<Inicio /> } />
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/tienda/:categoria' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetail /> } />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<ShoppingCart /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
