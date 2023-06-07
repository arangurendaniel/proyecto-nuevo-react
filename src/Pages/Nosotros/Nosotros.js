import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className='pagina-nosotros'>
        <h2 className='titulo-nosotros' >¡Hacemos lo que amamos!</h2>
        <img src={require("../../imagenes/banner-funkos-dos.jpg")} alt="Banner de Funkos" />
        <p className='texto'>Bienvenidos a nuestra tienda de cultura pop. Somos una empresa apasionada por la cultura pop y amantes de los artículos coleccionables. Desde funkos hasta tazas con diseños divertidos, nuestra tienda ofrece una amplia gama de productos para todos los fanáticos de la cultura pop.</p>
        <p className='texto'>Nos enorgullecemos de ofrecer una selección única de artículos que son difíciles de encontrar en otro lugar. Nos aseguramos de que nuestros productos sean de alta calidad y asequibles para que todos puedan disfrutar de sus personajes favoritos en forma de funkos, tazas, camisetas y mucho más.</p>
        <p className='texto'>En nuestra tienda, valoramos la opinión de nuestros clientes y siempre nos esforzamos por brindar un servicio excepcional. Nuestro objetivo es hacer que cada experiencia de compra sea emocionante y satisfactoria para nuestros clientes.</p>
        <p className='texto'>Así que si eres un fanático de la cultura pop, te invitamos a visitar nuestra tienda y explorar nuestra amplia selección de productos. ¡Encuentra tu próximo tesoro pop con nosotros</p>
    </div>
  )
}

export default Nosotros