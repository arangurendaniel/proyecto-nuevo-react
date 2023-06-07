import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><img className='logo' src={require("../../imagenes/logo-nuevo-dos.png")} alt="Logo de Meme's House" /></Link>
      <ul className="menu">
        <li className='menu-link'>
          <Link to="/">Inicio</Link>
        </li>
        <li className='menu-link menu-two'>
          <Link to="/tienda">Tienda</Link>
          <ul className='submenu'>
            <li className='submenu-link'><Link to={"/tienda/Tazas"}>Tazas</Link></li>
            <li className='submenu-link'><Link to={"/tienda/Funkos"} >Funkos</Link></li>
            <li className='submenu-link'><Link to={"/tienda/Vasos"}>Vasos</Link></li>
          </ul>
        </li>
        <li className='menu-link'>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className='menu-link'>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar