import './ShoppingCart.css'
import { useContext, useRef, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase.config'
import { addDoc, collection } from 'firebase/firestore'

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

  const [datosCliente, setDatosCliente] = useState(
    {buyer: 
      {nombre: "", 
      apellido: "",
      telefono: "", 
      email: "",
      emailRepetido: ""}
    })

    const handleDatosCliente = (e) => {
      setDatosCliente({buyer: {
        ...datosCliente.buyer, [e.target.name]: e.target.value
      }})
    }

    const hoy = new Date();
    const totalaPagar = precioTotal();

    const [order, setOrder] = useState()

    const createOrder = () => {
      setOrder({buyer: {...datosCliente.buyer}, items : {...carrito}, fecha: hoy, total: totalaPagar});
      console.log(order)
    }

    const formulario = useRef()

    const handleSubmit = async (e) => {
      e.preventDefault();
      const col = collection(db, 'orders')
      setOrder({buyer: {...datosCliente.buyer}, items : {...carrito}, fecha: hoy, total: totalaPagar});
      const newOrder = await addDoc(col, order)
      alert("Su compra que registrada bajo el siguiente codigo: " + newOrder.id)
      formulario.current.reset();
      vaciarCarrito();

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
          <form ref={formulario} className='formulario-pagos' onSubmit={handleSubmit} >
            <h2>Formulario de Pago</h2>
            <section>
              <label htmlFor="">Nombre</label>
              <input type="text" name='nombre' onChange={handleDatosCliente} required />
              <label htmlFor="">Apellido</label>
              <input type="text" name="apellido" onChange={handleDatosCliente} id="" required />
              <label htmlFor="">Teléfono</label>
              <input type="phone" name='telefono' onChange={handleDatosCliente} required  />
              <label htmlFor="">Correo electronico</label>
              <input type="email" name='email' onChange={handleDatosCliente} required  />
              {datosCliente.buyer.email !== datosCliente.buyer.emailRepetido && <span className='error-message' >Los correos electronicos deben ser iguales</span>}
              <label htmlFor="">Repetir correo electronico</label>
              <input type="email" name='emailRepetido' onChange={handleDatosCliente} required  />
            </section>
            {datosCliente.buyer.email === datosCliente.buyer.emailRepetido ? <button onClick={createOrder} className='boton-pagar' type='submit'>Pagar en Efectivo</button> : <button disabled className='boton-pagar disabled' type='submit'>Pagar en Efectivo</button>}
          </form>
        </div>
      </>}
    </div>
  )
}

export default ShoppingCart