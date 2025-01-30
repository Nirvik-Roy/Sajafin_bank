import { useState } from 'react'
import './App.css'
import SajafinHome from './View/SajafinHome/SajafinHome'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SajafinHome />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
