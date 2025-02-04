import React from 'react'
import endlessLogo1 from '../../assets/Group 1171275290.png'
import endlessLogo2 from '../../assets/Group 1171275291.png'
import endlessLogo3 from '../../assets/Group 1171275292.png'

const EndlessPossibility = () => {
  return (
    <>
      <div className="uni_container">
        <div className="endless-possibility-section-wrapper">
          <p className='boost-heading'>Boost your savings with the right credit card</p>
          <h2 className='endless-possibility-heading'>Access Endless Possibilities With Sajafin Card</h2>
          <p className='credit-debit-heading'>All your needs covered with a full range of credit and debit cards</p>
          <div className="endless-possible-cards-wrapper">
            <div className="endless-possible-card">
              <img src={endlessLogo1} alt="" />
              
              <p className='endless-card-text'>No Minimum Balance Required</p>
              <p className='endless-card-text1'>Taking the first step towards your dreams should be a breeze, not aburden.</p>
              
            </div>
            <div className="endless-possible-card">
            <img src={endlessLogo2} alt="" />

              <p className='endless-card-text'>No Minimum Balance Required</p>
              <p className='endless-card-text1'>Taking the first step towards your dreams should be a breeze, not aburden.</p>
            </div>
            <div className="endless-possible-card">
            <img src={endlessLogo3} alt="" />
              <p className='endless-card-text'>No Minimum Balance Required</p>
              <p className='endless-card-text1'>Taking the first step towards your dreams should be a breeze, not aburden.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EndlessPossibility
