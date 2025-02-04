import React from 'react'
import Header from '../../Layout/Header'
import CardHead from './CardHead'
import './SajafinCard.css'
import EndlessPossibility from './EndlessPossibility'
import Rewards from './Rewards'
import CardSpend from './CardSpend'
import ChooseCard from './ChooseCard'
import CardAccordion from './CardAccordion'
import OpenAccount from './OpenAccount'
import Footer from '../../Layout/Footer.jsx'

const SajafinCard = () => {
  return (
    <>
      <div className="uni_conatiner" style={{position:"relative"}}>
        <Header />
      </div>
      <CardHead />
      <EndlessPossibility />
      <Rewards />
      <CardSpend />
      <ChooseCard />
      <Rewards />
      <CardAccordion />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default SajafinCard
