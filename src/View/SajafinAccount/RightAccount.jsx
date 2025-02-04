import React from 'react'
import bankImg from '../../assets/Group 1171275295.png'

const RightAccount = () => {
  return (
    <>
      <div className="right-account-wrapper">
        <div className="right-account-left">
        <p className='financial-help-heading'>The right financial help, at the right time</p>
          <h1 className='bank-account-heading'>An Account You Can Truey Bank Upon</h1>
          <p className='change-the-way-para'>Change the way you manage your money. We have a fine range of accounts to help you manage your finances seamlessly</p>
          <button className='loan-apply-now-btn'>Apply Now</button>
        </div>
        <div className="right-account-right">
          <img src={bankImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default RightAccount
