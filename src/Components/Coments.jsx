import React, { useState, useEffect } from 'react';
import Player from './Player';
import { useParams } from 'react-router-dom';
import { episodioArrays } from '../assets/database/episodios';

const Coments = () => {
  const { slug } = useParams();
  const episodio = episodioArrays.find(episodio => episodio.slug === slug);
  
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  // Carrega os comentários salvos no localStorage ao carregar a página
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`comentarios-${slug}`)) || [];
    setComentarios(stored);
  }, [slug]);

  // Salva os comentários no localStorage
  const salvarComentarios = (novos) => {
    localStorage.setItem(`comentarios-${slug}`, JSON.stringify(novos));
    setComentarios(novos);
  };

  // Adiciona um novo comentário
  const handleComentario = (e) => {
    e.preventDefault();

    if (!nome.trim() || !comentario.trim()) {
      alert('Preencha seu nome e comentário.');
      return;
    }

      const novoComentario = {
        id: Date.now(),
        nome,
        texto: comentario,
    };

    const atualizados = [novoComentario, ...comentarios];
    salvarComentarios(atualizados);
    setComentario('');
    setNome('');
  };

  // Deleta um comentário
  const deletarComentario = (id) => {
    const atualizados = comentarios.filter(c => c.id !== id);
    salvarComentarios(atualizados);
  };

  return (
    <div className='container mx-auto text-white'>

      {/* Área de Comentários */}
      <section className='mt-8 mb-20'>
        <h2 className='text-xl font-bold mb-4'>Comentários</h2>

        <form onSubmit={handleComentario} className='mb-6 space-y-4'>
          <input
            type='text'
            placeholder='Seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='w-full p-3 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white'
          />

          <textarea
            placeholder='Escreva seu comentário...'
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className='w-full p-4 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none'
            rows='4'
          ></textarea>

          <button
            type='submit'
            className='px-4 py-2 bg-zinc-600 hover:bg-zinc-800 text-white font-semibold rounded transition-colors'
          >
            Comentar
          </button>
        </form>

        <div className='space-y-4'>
          {comentarios.length === 0 ? (
            <p className='text-gray-400'>Nenhum comentário ainda.</p>
          ) : (
            comentarios.map(com => (
              <div
                key={com.id}
                className='bg-zinc-700 p-4 rounded-xl shadow flex justify-between items-start gap-4'
              >
                <div>
                  <p className='text-md text-white font-semibold mb-1'>{com.nome}</p>
                  <p className='text-sm'>{com.texto}</p>
                </div>
                <button
                  onClick={() => deletarComentario(com.id)}
                  className='text-red-400 hover:text-red-600 text-sm font-bold transition-colors'
                  title='Deletar comentário'
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Coments