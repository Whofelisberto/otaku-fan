import React from 'react'
import Player from './Player'
import { useParams } from 'react-router-dom'
import { episodioArrays } from '../assets/database/episodios'
import Coments from './Coments'

const ContentItem = () => {
    
  const { slug } = useParams();

    const episodio = episodioArrays.find(episodio => episodio.slug === slug);

  return (
    <>
    <div className='container mx-auto min-h-screen text-white'>
    <h1 className='font-mono text-2xl mb-10 mt-10 text-center max-sm:text-xl'>{episodio.titulo}</h1>
    <div className='grid justify-center'>
    <Player 
    url={episodio.url}
    title={episodio.titulo}
    />
    </div>
    <div>
      <p className='text-white bg-zinc-700 p-5 rounded-2xl mt-10 mb-2 font-mono max-sm:m-3'><span className='text-lg uppercase  font-bold'>sinopse:</span> {episodio.sinopse}
      </p>
    </div>
    </div>
  <Coments />
    </>
  )
}

export default ContentItem