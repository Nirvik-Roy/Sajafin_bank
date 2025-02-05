import React from 'react'
import './SajafinAccount.css'
import Header from '../../Layout/Header'
import RightAccount from './RightAccount'
import BusinessSolution from './BusinessSolution'
import SecurityTrust from './SecurityTrust'
import BusinessSolution2 from './BusinessSolution2'
import CardAccordion from '../SajafinCard/CardAccordion'
import OpenAccount from '../SajafinCard/OpenAccount.jsx'
import Footer from '../../Layout/Footer'
const SajafinAccount = () => {
  return (
    <>
      <div className="uni_container">
        <Header />
      </div>
      <RightAccount />
      <BusinessSolution />
      <SecurityTrust />
      <BusinessSolution2 />
      <CardAccordion/>
      <OpenAccount/>
      <Footer/>
    </>
  )
}

export default SajafinAccount
