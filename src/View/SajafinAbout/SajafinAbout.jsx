import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import './SajafinAbout.css'
import AboutUsHead from './AboutUsHead'
import HomeExperience from '../SajafinHome/HomeExperience'
import Brands from '../SajafinHome/Brands'
import Ipdcataglance from '../SajafinHome/Ipdcataglance'
import Services from '../SajafinHome/Services'
import BestResult from '../SajafinHome/BestResult'
import MoneyTransfer from '../SajafinHome/MoneyTransfer'
import Remittances from '../SajafinHome/Remittances'
import Ambition from './Ambition'

const SajafinAbout = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />  
      </div>
      <AboutUsHead />
      <Ambition />
      <HomeExperience />
      <Brands />
      <Ipdcataglance />
      <Services />
      <BestResult />
      <MoneyTransfer />
      <Remittances />   
      <Footer/>
    </>
  )
}

export default SajafinAbout
