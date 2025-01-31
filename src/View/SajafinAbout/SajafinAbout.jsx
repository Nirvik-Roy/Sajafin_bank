import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import './SajafinAbout.css'
import AboutUsHead from './AboutUsHead'
import HomeExperience from '../SajafinHome/HomeExperience'

const SajafinAbout = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />  
      </div>
      <AboutUsHead />
      <HomeExperience />
      <Footer/>
    </>
  )
}

export default SajafinAbout
