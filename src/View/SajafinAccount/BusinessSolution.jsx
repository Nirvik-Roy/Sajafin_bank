import React from 'react'
import businessCardLogo1 from '../../assets/Group 1171275296.png'
import businessCardLogo2 from '../../assets/Group 1171275297.png'
import businessCardLogo3 from '../../assets/Group 1171275298.png'

const BusinessSolution = () => {
  return (
    <>
      <div className="business-solution-wrapper">
        <p className='open-account-heading'>Open your account from anywhere in the world</p>
        <h2 className='Solutions-for-business-heading'>Solutions for Every Business Need</h2>
        <p className='solutions-para'>Power up your business and personal life with a full stack online bank account that fits your needs.</p>
        <div className="business-solution-cards-wrapper">
          <div className="business-solution-card">
              <div className="business-solution-logo">
                <img src={businessCardLogo1} alt="" />
              </div>
              <p className='solution-card-bold-text'>No Minimum Balance Required</p>
              <p className='solution-card-para'>Taking the first step towards your dreams
              should be a breeze, not a burden.</p>
          </div>
          <div className="business-solution-card">
          
              <div className="business-solution-logo">
                <img src={businessCardLogo2} alt="" />
              </div>
              <p className='solution-card-bold-text'>No Monthly Account Fees</p>
              <p className='solution-card-para'>So that every month, you can focuss on
              investing in your ambitions.</p>
          </div>
          <div className="business-solution-card">
            
              <div className="business-solution-logo">
                <img src={businessCardLogo3} alt="" />
              </div>
              <p className='solution-card-bold-text'>No SSN Needed</p>
              <p className='solution-card-para'>All we need is baisc information about
              you, your visa and password.</p>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default BusinessSolution
