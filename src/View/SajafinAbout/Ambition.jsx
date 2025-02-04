import React from 'react'
import aboutusImg1 from '../../assets/about_1.png'
import aboutusImg2 from '../../assets/about_2.png'
import aboutusImg3 from '../../assets/about_3.png'

const Ambition = () => {
  return (
    <>
      <div className="ambition-section-wrapper">
        <div className="ambition-circle"></div>
        <div className="ambition-section-container">
        <div className="ambition-left-section">
          <p className='ambition-about-us'>About Us</p>
          <p className='ambition-heading'>Your ally in achieving ambition beyond borders</p>
          <p className='aboutus-para'>We understand that with global ambition comes global Challenges and we are here to bridge the gap by offering seamless cross-border financial services.Consider us your friendly digital guide to all things finance, helping you make the most of your money.</p>
          <div className="ambition-small-cards-wrapper">
            <div className="customer-satisfaction-card aboutus-small-card">
              <p className='big-text'>98<span>%</span></p>
              <p className='aboutus-card-para'>Customer Satisfaction</p>
            </div>
            <div className="monthly-active-users-card aboutus-small-card">
              <p className='big-text'>2058<span>M</span></p>
              <p className='aboutus-card-para'>Monthly Active Users</p>
            </div>
            <div className="new-users-card aboutus-small-card">
              <p className='big-text'>100<span>K</span></p>
              <p className='aboutus-card-para'>New Users Per Week</p>
            </div>
          </div>
        </div>
        <div className="ambition-right-section">
          <img src={aboutusImg1} alt="" className='aboutus-img1'/>
          <img src={aboutusImg2} alt="" className='aboutus-img2'/>
          <img src={aboutusImg3} alt="" className='aboutus-img3'/>
        </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Ambition
