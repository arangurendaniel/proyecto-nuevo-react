import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../firebase.config';
import { getDoc, doc } from 'firebase/firestore';
import './ItemDetail.css';


const ItemDetail = () => {

  const id = useParams().id
  console.log(id)

  const [articulo, setArticulo] = useState()

  const objeto = doc(db, 'productos', id)

  getDoc(objeto)
    .then((doc) => {
      setArticulo(doc.data());
      console.log(articulo)
    })

  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    cantidad < articulo.stock && setCantidad(cantidad + 1);
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const { carrito, setCarrito, contadorDeProductos} = useContext(CartContext);
  
  const handleAgregar = () => {
    const itemAgregado = {...articulo, cantidad}

    const duplicado = carrito.find((producto) => producto.id === itemAgregado.id)

    if (duplicado) {
      duplicado.cantidad = duplicado.cantidad + cantidad;
      setCarrito(carrito)
    } else {
      setCarrito([...carrito, itemAgregado])
    }
    contadorDeProductos();
  }

  contadorDeProductos();

  return (
    <>
    {articulo && 
      <div className='item-detail-container'>
        <div className='item-detail-img-container'>
          <img className='item-detail-img' src={articulo.imagen} alt={articulo.nombre} />
        </div>
        <div className='item-detail-info-container'>
          <p className='item-categoria'>{articulo.categoria}</p>
          <p className='item-codigo'><span>Código: </span> {articulo.id}</p>
          <h2 className='item-nombre'>{articulo.nombre}</h2>
          <p className='item-precio'>${articulo.precio}</p>
          <p className='item-descripcion'>{articulo.descripcion}</p>
          <div className='item-count'>
            <button className='boton-sumar' onClick={handleSumar}>+</button>
            <p>{cantidad}</p>
            <button className='boton-sumar' onClick={handleRestar}>-</button>
          </div>
          <button className='boton-agregar' onClick={handleAgregar} >Agregar al carrito</button>
        </div>
      </div>
      }
    </>
  )
}

export default ItemDetail