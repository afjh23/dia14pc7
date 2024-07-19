import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useLocation } from 'react-router-dom'
import { CardPokemon } from '../components'

export const SearchPage = () => {
    const location = useLocation()

	const { globalPokemons } = useContext(PokemonContext)

	const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

	return (
		<div className='max-w-[1200px] m-auto'>
			<p className='mb-[30px]'>
				Se encontraron <span className='font-bold'>{filteredPokemons.length}</span>{' '}resultados:
			</p>
			<div className='grid gap-[20px] grid-cols-4 max-w-[1200px] m-auto'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	)
}
