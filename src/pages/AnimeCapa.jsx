import React from 'react'
import { capasArrays } from '../assets/database/capas'
import { Link } from 'react-router-dom'

const AnimeCapa = ({ items = 12}) => {
  return (
    <div className='text-white p-5 container mx-auto'>
      <h1 className="text-2xl font-bold mb-10 uppercase">Lista de Animes</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-sm:grid-cols-2'>
        {capasArrays.slice(0, items).map((capas, index) => (
          <Link to={`/capa/${capas.id}`}><article key={index} className='rounded-xl hover:scale-105 transition-transform duration-200'>
            <img
              className='w-full bg-cover rounded-xl'
              src={capas.image}
              alt={capas.titulo}
            />
            <h2 className='text-center mt-2'>{capas.titulo}</h2>
          </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimeCapa
