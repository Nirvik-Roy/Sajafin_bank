import React from 'react'
import './SajafinHome.css'
import Header from '../../Layout/Header'
import family from '../../assets/t2PuBsfgkl__1_-removebg-preview (1) 1.png'
import phone from '../../assets/Vector (5).png'
import img1 from '../../assets/Vector (1).png'
import img2 from '../../assets/Vector (2).png'
import img3 from '../../assets/Vector (3).png'
import img4 from '../../assets/Vector (4).png'
import HomeExperience from './HomeExperience'
import car from '../../assets/Vector.png'
import home from '../../assets/home.png'
import Brands from './Brands.jsx'
import Ipdcataglance from './Ipdcataglance.jsx'
import Services from './Services.jsx'
import BestResult from './BestResult.jsx'
import MoneyTransfer from './MoneyTransfer.jsx'
import Remittances from './Remittances.jsx'
import vectorimg from '../../assets/Group 1171275289 (2).png'
import Accordion from './Accordion.jsx'
import Footer from '../../Layout/Footer.jsx'
const SajafinHome = () => {
  return (
    <>
    <div className='uni_container' style={{
      
      paddingBottom:'150px'
    }}>
    <Header/>
    <div className="home-banner-wrapper" style={{position:'relative'}}>

    <div className='background_pink_div'>
      <img className='family_img' src={family}/>
      <div className='car_loans_div'>
         <img src={car}/>
         <p>Car Loans</p>
      </div>
      <div className='home_loans_div'>
         <img src={home}/>
         <p>Home Loan</p>
      </div>
    </div>
    <div className='sajafin_head_wrapper_div'>
    <div>
    <h1>Chase Your <br/>
    Dream with us</h1>
    <p>The harder you work for something, the greater <br/> you’ll feel when you achieve it.</p>
    <div className='coupon_div_wrapper'>
        <button>APPLY ONLINE</button>
        <button className='active'>LOAN CALCULATOR</button>
      </div>
    </div>
      
     
      
      <div className='home_call_wrapper'>
        <div className='home_call_div'>
          <img src={phone}/>
          <p> +1 800-555-1234 <span>|</span></p>
        </div>
        <div className='home_social_wrapper'>
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          <img src={img4}/>
        </div>
      </div>
    </div>
    </div>
    </div>
     <HomeExperience/>
      <Brands/>
      <Ipdcataglance/>
      <Services />
      <BestResult />
      <MoneyTransfer />
      <Remittances />
      <img src={vectorimg} alt="" style={{height: "320px", width:"100%"}}/>
      <Accordion />
      <Footer />
    </>
  )
}

export default SajafinHome
