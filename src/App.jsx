import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Contato from './pages/Contato'
import AnimeList from './pages/AnimeList'
import CapaItem from './Components/CapaItem'
import ContentItem from './Components/ContentItem'
import Busca from './Components/Busca'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/busca" element={<Busca />} />
    <Route path="/capa/:id" element={<CapaItem />} />
    <Route path="/anime/:slug" element={<ContentItem />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/lista-de-animes" element={<AnimeList />} />
      </Routes>

    <Footer />
    </BrowserRouter>
    </>

  )
}

export default App