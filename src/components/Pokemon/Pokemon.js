import { useEffect, useState } from 'react';
import './Pokemon.css';

const Pokemon = () => {

  const [randomNumber, setRandomNumber] = useState(0)

  const chooseNumber = () => {
    const number = Math.floor(Math.random() * 100);
    setRandomNumber(number)
  }

  useEffect(() => {
    chooseNumber();
  }, [])
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    if (randomNumber !== 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setPokemon(data)
      })
    } else {
      console.log("Loading")
    }
  }, [randomNumber])
  

  return (
    <>
    {pokemon && 
    
    <div className='pokemon-container'>
      <img className='pokemon-img' src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className='pokemon-info'>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <p>¡Compráte una taza!</p>
      </div>
    </div>

    }
    </>
  )
}

export default Pokemon