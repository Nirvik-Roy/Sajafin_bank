import React from 'react'
import AccountSecurityImg from '../../assets/Group 1171275302.png'

const AccountSecurity = () => {
  return (
    <>
      <div className="account-security-wrapper">
        <div className="account-security-left">
          <img src={AccountSecurityImg} alt="" />
        </div>
        <div className="account-security-right">
          <p className='secure-grow-heading'>Secure & Grow Your  Savings</p>
          <h2 className='secure-bold-text'>Savings Accounts Made for You </h2>
          <p className='helping-save-goal-para'>Helping you save for your goals sooner, with accounts free from
          account keeping, management, and annual fees.</p>
          <p className='free-deposite'><i class="fa-solid fa-circle-check" style={{color:"#E12312", marginRight:"10px", fontSize:"15px"}}></i>Free deposits and withdrawls</p>
          <p className='free-deposite'><i class="fa-solid fa-circle-check" style={{color:"#E12312", marginRight:"10px", fontSize:"15px"}}></i>Your savings are protected at all times</p>
          <p className='free-deposite'><i class="fa-solid fa-circle-check" style={{color:"#E12312", marginRight:"10px", fontSize:"15px"}}></i>Be eligible for a dividend, when paid</p>
        </div>
      </div>
    </>
  )
}

export default AccountSecurity
