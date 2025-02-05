import React from 'react'
import "./SavingsAccount.css"
import Header from '../../Layout/Header'
import AccountHead from './AccountHead'
import AccountSecurity from './AccountSecurity'
import SaveWithUs from './SaveWithUs'
import ChooseAccount from './ChooseAccount'
import HowItWorks from './HowItWorks'
import CardAccordion from '../SajafinCard/CardAccordion.jsx'
import OpenAccount from '../SajafinCard/OpenAccount.jsx'
import Footer from '../../Layout/Footer.jsx'

const SavingsAccount = () => {
  return (
    <>
      <div className="uni_container">
        <Header />
      </div>
      <AccountHead />
      <AccountSecurity />
      <SaveWithUs />
      <ChooseAccount />
      <HowItWorks />
      <CardAccordion />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default SavingsAccount
