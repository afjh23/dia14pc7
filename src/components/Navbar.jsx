import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

export const Navbar = () => {
    const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
        console.log('Estoy aqui')
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};
  return (
    <>
    <header className='max-w-6xl mx-auto flex flex-row items-center justify-between py-10 z-10'>
    <Link to='/' className="flex-shrink-0">
					<img
						src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
						alt='Logo Pokedex'
                        className="w-36"
					/>
				</Link>
			<form className="flex items-center gap-4" onSubmit={onSearchSubmit}>
				<div className="flex items-center gap-2 border border-gray-500 py-3 px-5 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-5 h-5 text-gray-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<input
						type="search"
                        name="valueSearch"
                        id=''
                        value={valueSearch}
                        onChange={onInputChange}
						placeholder="Buscar nombre de Pokemon"
                        className="w-72 border-none outline-none text-base font-sans"
					/>
				</div>

				<button className="bg-primary text-white rounded-full py-3 px-6 cursor-pointer tracking-wide hover:bg-primary-hover hover:text-black">Buscar</button>
			</form>
		</header>

        <Outlet/>
    </>
  )
}
