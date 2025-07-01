import React from "react";
import { Link } from 'react-router-dom';
import { capasArrays } from "../assets/database/capas";

const Section = () => {
  return (
    <>
      <section className="container mx-auto p-5 ">
        <h1 className="text-white font-mono uppercase bg-zinc-700 py-2 px-2 rounded-xl">Animes Online</h1>
        <article className="grid justify-center mt-5">
          <div className="gap-5 justify-center overflow-auto grid grid-cols-6 max-sm:grid-cols-3 max-sm:w-[350px] ">
            {capasArrays.slice(0,6).map((capas, index) => (
            <div key={index} className="overflow-x-auto justify-center">
            <Link to={`/capa/${capas.id}`}><img
                className="rounded-xl"
                src={capas.image}
                alt={capas.titulo}
              />
              <h3 className="text-white font-mono text-sm mt-1 text-center">{capas.titulo}</h3></Link>
            </div>
            ))}
            </div>
        </article>
        <h2 className="text-white mt-10 p-2 rounded-xl uppercase font-mono bg-zinc-700">
          Últimos Lançamentos
        </h2>
      </section>
    </>
  );
};

export default Section;
