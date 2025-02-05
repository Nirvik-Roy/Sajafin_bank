import React from 'react'
import securityTrustImg from '../../assets/Consultative sales-bro 1.png'

const SecurityTrust = () => {
  return (
    <>
      <div className="security-trust-wrapper">
        <div className="security-trust-left">
          <h2 className='trust-heading'>Our trust is built on
          yout security</h2>
          <p className='insurance-para'>We keep your money safe  with FDIC Insurance  worth upto $250,000
          through our partner bank.</p>
        </div>
        <div className="security-trust-right">
          <img src={securityTrustImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default SecurityTrust
