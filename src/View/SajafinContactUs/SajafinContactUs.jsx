import React from 'react'
import Header from '../../Layout/Header'
import './SajafinContactUs.css'
import ContactUsHead from './ContactUsHead'
import ContactUsGetInTouch from './ContactUsGetInTouch'

const SajafinContactUs = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />
      </div>
      <ContactUsHead />
      <ContactUsGetInTouch />
    </>
  )
}

export default SajafinContactUs
