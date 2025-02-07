import { useState } from 'react'
import './App.css'
import SajafinHome from './View/SajafinHome/SajafinHome'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SajafinAbout from './View/SajafinAbout/SajafinAbout'
import SajafinCard from './View/SajafinCard/SajafinCard'
import SajafinLoans from './View/SajafinLoan/SajafinLoans'
import SajafinAccount from './View/SajafinAccount/SajafinAccount'
import SavingsAccount from './View/SajafinSavingsAccount/SavingsAccount'
import SajafinContactUs from './View/SajafinContactUs/SajafinContactUs'
import GetStarted from './View/Register/GetStarted'
import SetUpPassword from './View/Register/SetUpPassword'
import MobileNumber from './View/Register/MobileNumber'
import Verification from './View/Register/Verification'
import SignIn from './View/Register/SignIn'

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
        <Route path='/contact-us' element={<SajafinContactUs />} />
        <Route path='/get-started' element={<GetStarted/>}/>
        <Route path='/set-password' element={<SetUpPassword/>}/>
        <Route path='/mobile-number' element={<MobileNumber/>}/>
        <Route path='/verification' element={<Verification/>}/>
         <Route path='/login' element={<SignIn/>}/>
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
