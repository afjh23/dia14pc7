import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {
  const { active, toggleFilter, handleCheckbox } = useContext(PokemonContext)

  return (
    <div className={`"flex justify-center fixed top-0  w-[250px] text-gray-700 bg-gray-200 h-full pt-[120px] transition-all duration-300 ${active ? 'left: 0' : 'left-[-300px]'}`}>
      <div className='flex flex-col gap-1 justify-center'>
        <div className='flex flex-row place-content-around'><span className="text-lg font-semibold">Tipo</span><button onClick={toggleFilter}>X</button></div>

        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='grass'
            id='grass'
            className='mr-2'
          />
          <label htmlFor='grass' className="text-gray-700">Planta</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='fire'
            id='fire'
            className='mr-2'
          />
          <label htmlFor='fire' className="text-gray-700">Fuego</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='bug'
            id='bug'
            className='mr-2'
          />
          <label htmlFor='bug' className="text-gray-700">Bicho</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='fairy'
            id='fairy'
            className='mr-2'
          />
          <label htmlFor='fairy' className="text-gray-700">Hada</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='dragon'
            id='dragon'
            className='mr-2'
          />
          <label htmlFor='dragon' className="text-gray-700">Dragón</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='shadow'
            id='shadow'
            className='mr-2'
          />
          <label htmlFor='shadow' className="text-gray-700">Fantasma</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='ground'
            id='ground'
            className='mr-2'
          />
          <label htmlFor='ground' className="text-gray-700">Tierra</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='normal'
            id='normal'
            className='mr-2'
          />
          <label htmlFor='normal' className="text-gray-700">Normal</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='psychic'
            id='psychic'
            className='mr-2'
          />
          <label htmlFor='psychic' className="text-gray-700">Psíquico</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='steel'
            id='steel'
            className='mr-2'
          />
          <label htmlFor='steel' className="text-gray-700">Acero</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='dark'
            id='dark'
            className='mr-2'
          />
          <label htmlFor='dark' className="text-gray-700">Siniestro</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='electric'
            id='electric'
            className='mr-2'
          />
          <label htmlFor='electric' className="text-gray-700">Eléctrico</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='fighting'
            id='fighting'
            className='mr-2'
          />
          <label htmlFor='fighting' className="text-gray-700">Lucha</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='flying'
            id='flying'
            className='mr-2'
          />
          <label htmlFor='flying' className="text-gray-700">Volador</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='ice'
            id='ice'
            className='mr-2'
          />
          <label htmlFor='ice' className="text-gray-700">Hielo</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='poison'
            id='poison'
            className='mr-2'
          />
          <label htmlFor='poison' className="text-gray-700">Veneno</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='rock'
            id='rock'
            className='mr-2'
          />
          <label htmlFor='rock' className="text-gray-700">Roca</label>
        </div>
        <div className='flex gap-2 pl-14'>
          <input
            type='checkbox'
            onChange={handleCheckbox}
            name='water'
            id='water'
            className='mr-2'
          />
          <label htmlFor='water' className="text-gray-700">Agua</label>
        </div>
      </div>
    </div>
  )
}
