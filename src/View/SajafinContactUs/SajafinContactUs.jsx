import React from 'react'
import Header from '../../Layout/Header'
import './SajafinContactUs.css'
import ContactUsHead from './ContactUsHead'
import ContactUsGetInTouch from './ContactUsGetInTouch'
import NeedHelp from './NeedHelp'
import CardAccordion from '../SajafinCard/CardAccordion.jsx'
import OpenAccount from '../SajafinCard/OpenAccount.jsx'
import Footer from '../../Layout/Footer.jsx'

const SajafinContactUs = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />
      </div>
      <ContactUsHead />
      <ContactUsGetInTouch />
      <NeedHelp />
      <CardAccordion />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default SajafinContactUs
