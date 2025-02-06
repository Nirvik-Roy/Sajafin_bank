import React from 'react'
import contactusHeadImg from '../../assets/Group 1171275308.png'

const ContactUsHead = () => {
  return (
    <>
      <div className="contact-us-head-wrapper">
        <div className="contact-us-head-left">
          <h2 className='contact-us-heading'>Contact Us</h2>
          <p className='home-to-contact-us-link'>Home <i class="fa-solid fa-arrow-right"></i> Contact Us</p>
        </div>
        <div className="contact-us-head-right">
          <img src={contactusHeadImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default ContactUsHead
