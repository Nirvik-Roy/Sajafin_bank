import React from 'react'
import openAccountImg from '../../assets/image 10.png'

const OpenAccount = () => {
  return (
    <>
      <div className="uni_container">
        <div className="open-account-section-wrapper">
          <div className="open-account-left">
            <h1 className='ready-to-heading'>Ready to get started?</h1>
            <p className='take-few-para'>It only takes a few minutes to register your free SAJAFIN Account.</p>
            <button className='open-act-btn'>Open an Account</button>
          </div>
          <div className="open-account-right">
            <img src={openAccountImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OpenAccount
