import { useState } from 'react'
import './App.css'
import SajafinHome from './View/SajafinHome/SajafinHome'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SajafinAbout from './View/SajafinAbout/SajafinAbout'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SajafinHome />} />
        <Route path='/about-us' element={<SajafinAbout />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
