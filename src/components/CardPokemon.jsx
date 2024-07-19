import React from 'react';
import './color.css'
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemon }) => {
  

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="block text-gray-800 no-underline hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div className="bg-gray-100 flex items-center justify-center rounded-lg h-64 mb-4">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <span className="block text-gray-500 mb-2">N° {pokemon.id}</span>
        <h3 className="text-xl font-bold mb-2 capitalize">{pokemon.name}</h3>
        <div className="flex gap-2 mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`text-sm py-1 px-3 rounded-full text-white ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};