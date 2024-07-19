import React from 'react'
import { useContext } from 'react'
import { PokemonList, FilterBar } from '../components'
import { PokemonContext } from '../context/PokemonContext'

export const HomePage = () => {
    const {onClickLoadMore, active, setActive, toggleFilter} = useContext(PokemonContext)
    return (
    <>
  <div className={`flex max-w-6xl mx-auto`}>
    <div className="flex items-center gap-4 mb-5 cursor-pointer" onClick={toggleFilter}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
      <span className="text-gray-600">Filtrar</span>
    </div>
  </div>
  <FilterBar />
  <PokemonList />
  
  <div className="flex justify-center my-10 max-w-6xl mx-auto">
    <button className="bg-primary text-white rounded-full py-3 px-6 cursor-pointer tracking-wide hover:bg-primaryHover hover:text-black" onClick={onClickLoadMore}>
      Cargar más
    </button>
  </div>
</>
  )
}
