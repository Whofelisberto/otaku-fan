import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser ,faXmark , faMagnifyingGlass , faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-otaku.png';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
  
  return (
    <>
    <nav className='bg-zinc-700 text-white p-4 flex items-center justify-between font-mono'>

  <div className='flex items-center gap-2 lg:gap-15'>
    <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />

    <button onClick={toggleMenu} className="px-4 p-1 flex  items-center gap-2 lg:hidden"><FontAwesomeIcon icon={menuOpen ? faXmark : faBars} /></button>

    {menuOpen && (
    <div className="z-50 max-lg:absolute top-20 left-2 bg-zinc-700 p-4  shadow-lg lg:hidden flex flex-col gap-4 text-white font-extrabold cursor-pointer">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/lista-de-animes" onClick={() => setMenuOpen(false)}>Lista de Animes</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>

        </div>
        )}

    <ul className="flex gap-10 uppercase max-lg:hidden">
    <li className="hover:underline hover:underline-offset-4"><Link to="/">Home</Link></li>
    <li className="hover:underline hover:underline-offset-4"><Link to="/lista-de-animes">Lista de Animes</Link></li>
    <li className="hover:underline hover:underline-offset-4"><Link to="/contato">Contato</Link></li>
    </ul>
  </div>

  <ul className='flex gap-2 sm:gap-8'>
  <li><Link to="/busca"><FontAwesomeIcon icon={faMagnifyingGlass} size='lg' /></Link></li>
  <li><Link to="/login"><FontAwesomeIcon icon={faCircleUser} size='lg' /></Link></li>
  </ul>
</nav>
    </>
  )
}

export default Header