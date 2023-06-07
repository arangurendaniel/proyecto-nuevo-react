import React from 'react'

const Practica = ({loading}) => {
  return (<>
    {loading ? <h2>Loading</h2> : <h2>Estamos listos!</h2> }
    </>
  )
}

export default Practica

{
  /*
  Esto va en App.js
  
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, [])

  */
}