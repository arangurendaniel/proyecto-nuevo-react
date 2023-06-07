import Pokemon from '../../components/Pokemon/Pokemon';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className='inicio-page'>
        <h1 className='inicio-title'>La tienda mas grande de Funkos, tazas y vasos de cultura pop</h1>
        <img className='inicio-banner' src={require("../../imagenes/banner-funkos.jpg")} alt="Banner de funkos" />
        <Pokemon />
    </div>
  )
}

export default Inicio