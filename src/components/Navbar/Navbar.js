import './Navbar.css';
import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {

    const {navMenu, toggleNavbar} = useContext(CartContext);

    let toggleClass = navMenu ? 'responsive_nav' : '';

    return (
    <header>
        <Link to={"/"}>
            <img className='logo' src={require("../../imagenes/logo-nuevo-dos.png")} alt="Logo" />
        </Link>
        <div className={`navbar ${toggleClass}`}>
            <ul className="menu">
                <li onClick={toggleNavbar} className='menu-link'>
                <Link to="/">Inicio</Link>
                </li>
                <li onClick={toggleNavbar} className='menu-link menu-two'>
                <Link to="/tienda">Tienda</Link>
                <ul className='submenu'>
                    <li onClick={toggleNavbar} className='submenu-link'><Link to={"/tienda/Tazas"}>Tazas</Link></li>
                    <li onClick={toggleNavbar} className='submenu-link'><Link to={"/tienda/Funkos"} >Funkos</Link></li>
                    <li onClick={toggleNavbar} className='submenu-link'><Link to={"/tienda/Vasos"}>Vasos</Link></li>
                </ul>
                </li>
                <li onClick={toggleNavbar} className='menu-link'>
                <Link to="/nosotros">Nosotros</Link>
                </li>
                <li onClick={toggleNavbar} className='menu-link'>
                <Link to="/contacto">Contacto</Link>
                </li>
                <CartWidget />
            </ul>
            <button 
            className='nav-btn nav-close-btn' 
            onClick={toggleNavbar}>
                <i className='bi bi-x-lg'></i>
            </button>
        </div>
        <button className='nav-btn' onClick={toggleNavbar}>
            <i className='bi bi-list'></i>
        </button>
    </header>
  )
}

export default Navbar