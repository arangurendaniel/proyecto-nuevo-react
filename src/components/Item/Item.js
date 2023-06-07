import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({producto}) => {
  return (
    <div className='item-card' >
      <div className='item-img-container'>
        <img className='item-img' src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className='item-info'>
        <h4 className='item-name'>{producto.nombre}</h4>
        <p>${producto.precio}</p>
        <p className='item-category'>{producto.categoria}</p>
        <Link className='ver-mas' to={`/producto/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item