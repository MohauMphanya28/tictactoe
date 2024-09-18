import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Game from './pages/Game/Game';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/game-on' element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router