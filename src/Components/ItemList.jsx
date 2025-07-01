import React from 'react'
import { Link } from 'react-router-dom';
import { capasArrays } from "../assets/database/capas";

const ItemList = () => {
  return (
    <>
    <div className='container mx-auto p-5 m-2 grid justify-center'>
    <h3 className='text-white uppercase mb-10 p-2 rounded-xl bg-zinc-700 mt-5'>Ùltimos Adicionados</h3>
    <div className='grid justify-center grid-cols-8 overflow-x-auto gap-5 max-sm:grid-cols-4 max-sm:w-[350px]'>
    {capasArrays.slice(-8).reverse().map((capas, index) => (
    <article key={index}>
      <div>
      <Link to={`/capa/${capas.id}`}><img className='rounded-xl' src={capas.image} alt={capas.titulo} />
        <h3 className='text-center'><span className='text-white font-mono ml-1'>{capas.titulo}</span></h3>
        </Link>
      </div>
    </article>
    ))}
    </div>
    </div>
    </>
  )
}

export default ItemList