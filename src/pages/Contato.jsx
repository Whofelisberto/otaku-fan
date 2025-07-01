import React from 'react'

const Contato = () => {
  return (
    <>
    <div className="min-h-screen p-5">
      <div className='p-15 bg-zinc-800 rounded-xl mb-5'>
        <span className='text-white text-xl'>
        Ficaremos contente em ler e sempre que possível responder os e-mails da seguinte natureza:
        </span>
        <ul className='text-white mt-5'>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Sugestões de séries para serem adicionadas em nosso sistema;</li>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Críticas sobre o funcionamento de nosso sistema; </li>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Dúvidas relacionadas ao funcionamento do site;</li>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Projetos inovadores interessados em parcerias/divulgação;</li>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Problemas relacionados aos vídeos de alguns episódios da série;</li>
          <li className='flex items-center'><span className="h-0.5 w-2 bg-white inline-block mr-2"></span>Interessados em trabalhar conosco.</li>
        </ul>
      </div>
  <form className="w-full bg-zinc-800 p-20 rounded-xl shadow-lg">
    <h2 className="text-white text-2xl font-bold mb-6">Entre em Contato</h2>

    <div className="mb-4">
      <label htmlFor="nome" className="block text-white mb-1">Nome</label>
      <input
        type="text"
        id="nome"
        placeholder="Seu nome"
        className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-white mb-1">Email</label>
      <input
        type="email"
        id="email"
        placeholder="seu@email.com"
        className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="mensagem" className="block text-white mb-1">Mensagem</label>
      <textarea
        id="mensagem"
        rows="5"
        placeholder="Digite sua mensagem aqui..."
        className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-black transition-colors"
    >
      Enviar Mensagem
    </button>
  </form>
</div>


    </>
  )
}

export default Contato