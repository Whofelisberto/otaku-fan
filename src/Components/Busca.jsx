import React, { useState } from 'react';
import { capasArrays } from '../assets/database/capas';
import { Link } from 'react-router-dom';

const Busca = () => {
  const [busca, setBusca] = useState('');

 
  const resultados = capasArrays.filter(capas =>
    capas.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mx-auto min-h-screen p-4 text-white">
      <h1 className="text-2xl font-bold mb-6">Buscar</h1>

      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Digite o nome do episódio..."
        className="w-full p-3 rounded bg-zinc-700 text-white placeholder-gray-400 mb-6"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {busca.length > 0 ? (
          resultados.length > 0 ? (
            resultados.map(capas => (
              <Link
                to={`/capa/${capas.id}`}
                key={capas.id}
                className="hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={capas.image}
                  alt={capas.titulo}
                  className="rounded-xl w-full bg-cover"
                />
                <p className="mt-2 text-sm text-center">{capas.titulo}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Nenhum resultado encontrado.
            </p>
          )
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            Digite algo para buscar episódios.
          </p>
        )}
      </div>
    </div>
  );
};

export default Busca;
