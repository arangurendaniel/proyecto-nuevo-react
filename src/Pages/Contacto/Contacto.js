import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
/*
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const handleDatosCliente = (e) => {
    setDatosCliente({
      ...datosCliente, 
      [e.target.name]: e.target.value
    })
  }
*/

const [form, setForm] = useState( 
  {buyer: {
    nombre: "",
    email: "",
    telefono: ""
}})

const handleForm = (e) => {
 setForm({
  buyer: {
    ...form.buyer,
    [e.target.name]: e.target.value
  }
 })
}

  return (
    <div>
        <img className='fondo-funkos' src={require("../../imagenes/funkos-contacto.jpg")} alt="Fondo de Funkos" />
        <form className='formulario-contacto' action="" onSubmit={handleSubmit} >
            <h1>Dejanos un mensaje</h1>
            <p>Nuestro equipo te contactará pronto</p>
            <input type="text" placeholder='nombre' name='nombre' onChange={handleForm} />
            <input type="email" placeholder='email' name='email' onChange={handleForm} />
            <input type="phone" placeholder='telefono' name='telefono' onChange={handleForm} />
            {/*
            <label htmlFor="">Nombre</label>
            <input type="text" name="nombre" value={datosCliente.nombre} onChange={handleDatosCliente} />
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={datosCliente.email} onChange={handleDatosCliente} />
            <label htmlFor="">Mensaje</label>
            <textarea name="mensaje" value={datosCliente.mensaje} onChange={handleDatosCliente} cols="30" rows="10"></textarea>
  */}
            <button className='boton-enviar' href="">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto