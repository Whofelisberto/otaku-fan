import React from 'react'

const Login = () => {

  return (
    <>

   <div className="flex justify-center items-center min-h-screen p-2 gap-10 max-sm:flex-col bg-[url('/src/assets/images/bg-login.jpeg')] bg-cover">

    <div className='w-full max-w-lg p-8 space-y-5'>
    <h1 className='text-4xl text-white'>Cadastre-se no OtakuFan</h1>
    <h3 className='text-2xl text-white'>...junte-se a nossa comunidade, mantenha seus animes favoritos bem pertinho de você!</h3>
  </div>

  <form className="w-full max-w-lg p-8 border border-white rounded-xl bg-zinc-800 shadow-lg" action="">
    <section>
      <h1 className="text-white text-3xl font-mono mb-6 text-center">Crie sua conta</h1>

      <div className="mb-4">
        <label htmlFor="user" className="text-white block mb-1">Usuário</label>
        <input
          type="text"
          id="user"
          placeholder="Seu usuário"
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="e-mail" className="text-white block mb-1">E-mail</label>
        <input
          type="email"
          id="e-mail"
          placeholder="Seu e-mail"
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="senha" className="text-white block mb-1">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Sua senha"
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirm_password" className="text-white block mb-1">Confirmar senha</label>
        <input
          type="password"
          id="confirm_password"
          placeholder="Confirme sua senha"
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <button onClick={() => alert('Conta criada com sucesso!')}
        type="submit"
        className="w-full py-2 rounded bg-zinc-500 text-white font-semibold hover:bg-zinc-900 transition-colors"
      >
        Criar conta
      </button>
    </section>
  </form>
</div>
    </>
  )
}

export default Login