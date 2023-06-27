import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';



const CartWidget = () => {

  const {contador, toggleNavbar} = useContext(CartContext);

  return (
      <div className='cart-widget-container' >
        <Link onClick={toggleNavbar} className='ir-al-carrito' to={"/carrito"}>
          <i className="icon-bag bi bi-bag-fill"></i>
        </Link>
          <div className='contador'>
              {contador}
          </div>
      </div>
  )
}

export default CartWidget