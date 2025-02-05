import { useState } from 'react'
import './App.css'
import SajafinHome from './View/SajafinHome/SajafinHome'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SajafinAbout from './View/SajafinAbout/SajafinAbout'
import SajafinCard from './View/SajafinCard/SajafinCard'
import SajafinLoans from './View/SajafinLoan/SajafinLoans'
import SajafinAccount from './View/SajafinAccount/SajafinAccount'
import SavingsAccount from './View/SajafinSavingsAccount/SavingsAccount'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SajafinHome />} />
        <Route path='/about-us' element={<SajafinAbout />} />
        <Route path='/cards' element={<SajafinCard />} />
        <Route path='/loan' element={<SajafinLoans />} />
        <Route path='/normal-account' element={<SajafinAccount/>} />
        <Route path='/savings-account' element={<SavingsAccount />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
