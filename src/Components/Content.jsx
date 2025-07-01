import React from 'react';
import { Link } from 'react-router-dom';

export const Content = ({ items = 12, itemsArray = [] }) => {
  return (
    <div className='container mx-auto p-2 mb-1'>
      <h2 className='text-white text-xl font-bold mb-4 ml-1 uppercase'>
      </h2>

      <div className='grid grid-cols-6 gap-5 max-sm:grid-cols-2 rounded-xl'>
        {itemsArray.slice(0, items).map((episodio, index) => (
         <Link to={`/anime/${episodio.slug}`} key={episodio.id}>
          <div className="grid justify-center">
            <img
              className='rounded-xl hover:scale-105 transition-transform duration-200'
              src={episodio.image}
              alt={episodio.titulo}
            />
            <span className='absolute top py-0 px-2 text-white font-bold rounded-xl bg-zinc-700 text-sm'>HD</span>
            <h3 className='text-white font-mono ml-1 mt-2 text-sm text-center'>
              <span>{episodio.titulo}</span>
            </h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
