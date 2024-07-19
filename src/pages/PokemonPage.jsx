import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components'
import { PokemonContext } from '../context/PokemonContext'
import { primerMayuscula } from '../helper/helper'

export const PokemonPage = () => {
    const { getPokemonByID } = useContext(PokemonContext)

	const [loading, setLoading] = useState(true)
	const [pokemon, setPokemon] = useState({})

	const { id } = useParams()

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id)
		setPokemon(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchPokemon(id)
	}, [])

    return (
        <main className='max-w-7xl mx-auto px-4 flex flex-col mt-24 mb-12'>
        {loading ? (
          <div className='flex justify-center my-52'>
            <Loader />
          </div>
        ) : (
          <>
            <div className='relative flex items-center mt-4'>
              <span className='absolute -top-32 left-0 text-primaryHover text-[200px] font-extrabold'>
                #{pokemon.id}
              </span>
              <div className='order-2 flex-1 py-6 pl-6 h-[400px]'>
                
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                    className='w-full h-full '
                  />
          
              </div>
      
              <div className='flex flex-col order-1 flex-1'>
                <h1 className='text-right text-6xl'>{primerMayuscula(pokemon.name)}</h1>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {pokemon.types.map(type => (
                    <span
                      key={type.type.name}
                      className={`text-xs py-1 px-3 rounded-md text-white ${type.type.name}`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between my-5 px-2'>
                  <div className=''>
                    <p className='font-bold text-lg'>Altura</p>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className=''>
                    <p className='font-bold text-lg'>Peso</p>
                    <span>{pokemon.weight}KG</span>
                  </div>
                </div>
              </div>
            </div>
      
            <div className='flex gap-[50px] items-center'>
              <h1 className='text-2xl font-bold uppercase'>Estadísticas</h1>
              <div className='flex flex-col gap-5 flex-1'>
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className='flex items-center gap-5'>
                    <span className='flex-[0.2] font-medium text-lg'>{primerMayuscula(stat.stat.name)}</span>
                    <div className='relative flex-1 bg-white  border-4 border-primary rounded-l h-8'>
                      <div
                        className='absolute bg-primary   h-6 rounded-l'
                        style={{ width: `${(stat.base_stat / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span className='font-medium text-lg'>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
  )
}
