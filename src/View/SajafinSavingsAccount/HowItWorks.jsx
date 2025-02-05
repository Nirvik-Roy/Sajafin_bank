import React from 'react'
import HowitworkImg from '../../assets/Group 1171275307.png'
import oneLogo from '../../assets/Group 1171275303.png'
import twoLogo from '../../assets/Group 1171275304.png'
import threeLogo from '../../assets/Group 1171275305.png'
import fourLogo from '../../assets/Group 1171275306.png'
import LineImg from '../../assets/Line 5.png'

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-work-wrapper">
        <p className='better-way-para'>A Better Way to Save</p>
        <h2 className='how-it-work-heading'>How it works</h2>
        <p className='finances-seamlessly'>We have a fine range of accounts to help you manage your finances seamlessly</p>
        <div className="how-to-work-container">
        <div className="how-it-work-left">
          <div className="check-ebility-div">
            <div className="check-ebility-num">
              <img src={oneLogo} alt="" className='oneLogo-img'/>
              <img src={LineImg} alt="" className='line-img'/>
            </div>
            <div className="check-ebility-text">
              <h3 className='check-heading'>Check your Eligibility</h3>
              <p className='check-para'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              metus justo, consectetur adipiscing elit. Morbi in metus justo.</p>
            </div>
          </div>
          <div className="check-ebility-div">
            <div className="check-ebility-num">
              <img src={twoLogo} alt="" className='oneLogo-img'/>
              <img src={LineImg} alt="" className='line-img'/>
            </div>
            <div className="check-ebility-text">
              <h3 className='check-heading'>Check your Eligibility</h3>
              
            </div>
          </div>
          <div className="check-ebility-div">
            <div className="check-ebility-num">
              <img src={threeLogo} alt="" className='oneLogo-img'/>
              <img src={LineImg} alt="" className='line-img'/>
            </div>
            <div className="check-ebility-text">
              <h3 className='check-heading'>Check your Eligibility</h3>
              
            </div>
          </div>
          <div className="check-ebility-div">
            <div className="check-ebility-num">
              <img src={fourLogo} alt="" className='oneLogo-img'/>
              
            </div>
            <div className="check-ebility-text">
              <h3 className='check-heading'>Check your Eligibility</h3>
              
            </div>
          </div>
        </div>
        <div className="how-it-work-right">
          <img src={HowitworkImg} alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
