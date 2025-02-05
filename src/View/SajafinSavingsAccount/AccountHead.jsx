import React from 'react'
import AccountHeadImg from '../../assets/Savings-bro 1.png'

const AccountHead = () => {
  return (
    <>
      <div className="account-head-wrapper">
        <div className="account-head-left">
          <h1 className='savings-account-heading'>Saving Account</h1>
          <div className="nav-links-wrapper">
            <p>Home</p>
            <p>Product</p>
            <p>Account</p>
            <p>Saving Account</p>
          </div>
        </div>
        <div className="account-head-right">
          <img src={AccountHeadImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default AccountHead
