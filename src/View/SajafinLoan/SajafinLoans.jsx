import React from 'react'
import './SajafinLoans.css'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer.jsx'
import DreamBig from './DreamBig.jsx'
import FinancialPlanning from './FinancialPlanning.jsx'
import PersonalizedSolution from './PersonalizedSolution.jsx'
import CardAccordion from '../SajafinCard/CardAccordion'
import OpenAccount from '../SajafinCard/OpenAccount.jsx'

const SajafinLoans = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />
      </div>
      <DreamBig />
      <FinancialPlanning />
      <PersonalizedSolution />
      <CardAccordion />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default SajafinLoans
