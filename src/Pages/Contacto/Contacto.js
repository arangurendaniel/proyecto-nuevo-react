import './Contacto.css';

const Contacto = () => {
  return (
    <div>
        <img className='fondo-funkos' src={require("../../imagenes/funkos-contacto.jpg")} alt="Fondo de Funkos" />
        <form className='formulario-contacto' action="">
            <h1>Dejanos un mensaje</h1>
            <p>Nuestro equipo te contactará pronto</p>
            <label htmlFor="">Nombre</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='boton-enviar' href="">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto