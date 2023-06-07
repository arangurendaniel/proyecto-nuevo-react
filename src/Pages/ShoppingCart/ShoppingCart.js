import './ShoppingCart.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ShoppingCart = () => {

  const {carrito, setCarrito, contadorDeProductos, precioTotal} = useContext(CartContext)

  const vaciarCarrito = () => {
    setCarrito([]);
    contadorDeProductos();
  }
  contadorDeProductos();

  const removerProducto = (id) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito)
    console.log(carrito)
  }

  return (
    <div className='contenedor-carrito'>
      <h2 className='carrito-titulo' >Carrito</h2>
      <p className='texto-inicial-carrito'>{carrito.length > 0 ? "Productos en Carrito" : "No se ha agregado nada al carrito"}</p>
      <div className={carrito.length > 0 ? 'contenedor-productos' : "undefined"}>
        {carrito.length > 0 && carrito.map((prod) => {
          return <div key={prod.id} className='contenedor-producto'>
            <img className='mini-picture' src={prod.imagen} alt={prod.nombre} />
            <div className='producto-info'>
              <span>{prod.categoria}</span>
              <span>{prod.nombre}</span>
              <span>Precio: ${prod.precio}</span>
              <span>Cant: {prod.cantidad}</span>
              <span>Total: ${prod.precio * prod.cantidad}</span>
            </div>
            <i onClick={() => removerProducto(prod.id)} className="eliminar-producto bi bi-x-lg"></i>
          </div>
        })}
      </div>
      {carrito.length > 0 && 
      <>
        <div className='total-pagar'>
          <p>Total a pagar: ${precioTotal()}</p>
          <button className='vaciar-carrito' onClick={vaciarCarrito} >Vaciar Carrito</button>
        </div>
        <div>
          <form className='formulario-pagos' action="">
            <h2>Formulario de Pago</h2>
            <section>
              <label htmlFor="">Nombre y Apellido</label>
              <input type="text" required />
              <label htmlFor="">Direccion</label>
              <input type="text" name="" id="" placeholder='Avenida Santa Ana...' required />
              <label htmlFor="">Correo Electronico</label>
              <input type="email"  />
            </section>
            <button className='boton-pagar' type='submit'>Pagar en Efectivo</button>
          </form>
        </div>
      </>}
    </div>
  )
}

export default ShoppingCart