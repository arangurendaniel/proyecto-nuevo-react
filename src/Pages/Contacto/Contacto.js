import { useRef, useState } from 'react';
import { db } from '../../firebase.config'
import { addDoc, collection } from 'firebase/firestore'

import './Contacto.css';

const Contacto = () => {

  const formularioConsulta = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const col = collection(db, 'messages')
    const newMessage = await addDoc(col, datosUsuario);
    alert("Mensaje enviado exitosamente");
    formularioConsulta.current.reset();
    setDatosUsuario({
      nombre: "",
      email: "",
      mensaje: ""
    })
    console.log(datosUsuario);
  }

  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const handleDatosUsuario = (e) => {
    setDatosUsuario({
      ...datosUsuario, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
        <img className='fondo-funkos' src={require("../../imagenes/funkos-contacto.jpg")} alt="Fondo de Funkos" />
        <form ref={formularioConsulta} className='formulario-contacto' onSubmit={handleSubmit} >
            <h1>Dejanos un mensaje</h1>
            <p>Nuestro equipo te contactará pronto</p>
            <label htmlFor="">Nombre</label>
            <input type="text" name="nombre" value={datosUsuario.nombre} onChange={handleDatosUsuario} />
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={datosUsuario.email} onChange={handleDatosUsuario} />
            <label htmlFor="">Mensaje</label>
            <textarea name="mensaje" value={datosUsuario.mensaje} onChange={handleDatosUsuario} cols="30" rows="10"></textarea>
            <button className='boton-enviar' href="">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto