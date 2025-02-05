import React from 'react'
import solutions2CardLogo1 from '../../assets/Group 1171275299.png'
import solutions2CardLogo2 from '../../assets/Group 1171275300.png'
import solutions2CardLogo3 from '../../assets/Group 1171275301.png'

const BusinessSolution2 = () => {
  return (
    <>
      <div className="business-solution2-wrapper">
      <p className='open-account-heading'>Open your account from anywhere in the world</p>
        <h2 className='Solutions-for-business-heading'>Solutions for Every Business Need</h2>
        <p className='solutions-para'>Power up your business and personal life with a full stack online bank account that fits your needs.</p>
        <div className="business-solution2-cards-wrapper">
          <div className="business-solution2-card">
            <div className="business-solution2-logo">
              <img src={solutions2CardLogo1} alt="" />
            </div>
            <p className='checking-account-heading'>Checking Account</p>
            <p className='checking-para'>Choose from our checking options that allow you to earn interest, avoid 
fees, and easily manage your 
account.</p>
<p>Open Account</p>
          </div>
          <div className="business-solution2-card">
          <div className="business-solution2-logo">
              <img src={solutions2CardLogo2} alt="" />
            </div>
            <p  className='checking-account-heading'>Checking Account</p>
            <p className='checking-para'>Choose from our checking options that allow you to earn interest, avoid 
fees, and easily manage your 
account.</p>
<p>Open Account</p>
          </div>
          <div className="business-solution2-card">
          <div className="business-solution2-logo">
              <img src={solutions2CardLogo3} alt="" />
            </div>
            <p className='checking-account-heading'>Checking Account</p>
            <p className='checking-para'>Choose from our checking options that allow you to earn interest, avoid 
fees, and easily manage your 
account.</p>
<p>Open Account</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessSolution2
