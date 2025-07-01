import React from "react";
import { Link, useParams } from "react-router-dom";
import { capasArrays } from "../assets/database/capas";
import { episodioArrays } from "../assets/database/episodios";

const CapaItem = () => {

  const { id } = useParams();
  const capa = capasArrays.find((item) => item.id === parseInt(id));
  const episodio = episodioArrays.find((item) => item.id === parseInt(id));


  return (
    <div className="container mx-auto p-5 text-white min-h-screen">
      <section>
        <div className="flex gap-6 items-start max-md:flex-col ">
          <img
            src={capa.image}
            alt={capa.titulo}
            className="rounded-xl mt-4 w-60 h-auto mx-auto"
          />

          <div className="mt-4">
            <h1 className="text-2xl font-bold mb-6">{capa.titulo}</h1>
            <p className="text-gray-300 mt-2"><span className="text-sm uppercase font-bold">Ano:</span><span className="font-mono"> {capa.ano}</span></p>
            <p className="text-gray-300 mt-1">
              <span className="text-sm uppercase font-bold">Gênero: </span><span className="font-mono">{capa.genero}
              </span></p>
            <p className="text-gray-300 mt-2"><span className="text-sm uppercase font-bold">Sinopse:</span> <span className="font-mono">{capa.sinopse}</span></p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg text-gray-300 mb-10">
            
          </p>
          <h3 className="bg-zinc-700 rounded-xl uppercase font-mono">
            <p className="m-1 mb-5">Todos os Episódios de {capa.titulo}</p>
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-5 max-md:flex justify-center">
        <Link to={`/anime/${episodio.slug}`} key={episodio.id}>
          <ul className="grid justify-center bg-zinc-700 rounded-xl">
            <img className="rounded-xl w-full h-auto" src={episodio.image} alt={episodio.titulo} />
            <span className='absolute top py-0 px-2 text-white font-bold rounded-xl bg-zinc-700 text-sm'>HD</span>
            <li className="text-center font-mono">{episodio.titulo}</li>
          </ul>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CapaItem;
