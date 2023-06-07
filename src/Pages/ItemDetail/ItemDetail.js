import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import './ItemDetail.css';

const ItemDetail = () => {

  const id = useParams().id
  console.log(id)

  const [articulo, setArticulo] = useState()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getProductos = async (id) => {
        try {

        const col = collection(db, "productos")
        const data = await getDocs(col)
        const result = data.docs.map(doc => doc={...doc.data()})
        setProductos(result)
        console.log("lo que hay en productos:");
        console.log(productos);
        const item = result.find((prod) => prod.id === id)
        setArticulo(item)
        console.log("El articulo es " + articulo)

        } catch (error) {
        console.log(error)
        
        }
    }

    getProductos(id);

  }, [id])


/*
  function buscarItemConId(id) {
    return new Promise ((resolve, reject) => {
  
      const item = data.find((prod) => prod.id === id)
  
      if (item) {
        resolve(item) 
      }
      else {
        reject ({
          error: "No se encontró el item"
        })
      }
  
    })
  };
*/

  
/*
  useEffect(() => {
    buscarItemConId(id)
      .then((resp) => {
        setArticulo(resp)
      })
  }, [id])
*/
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1)
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