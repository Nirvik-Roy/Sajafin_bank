import React from 'react'
import callCenterImg from '../../assets/Call center-pana 1.png'
import circleImg from '../../assets/Group 1171275309.png'

const ContactUsGetInTouch = () => {
  return (
    <>
      <div className="contact-us-get-in-touch-wrapper">
        <h2 className='contact-us-get-in-touch-heading'>Get in touch with us.</h2>
        <p className='fill-the-form-para'>Fill up the form and our team will get back to you within 24 hours</p>
        <div className="get-in-touch-form">
          <div className="get-form-first-wrapper">
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="what's your name ?"/>

          </div>
          <div className="form-group">

              <label htmlFor="phone">Phone:</label>
              <input type="number" id="phone" placeholder="(123) 480-3530"/>
          </div>
          <div className="form-group">

              <label htmlFor="message">Message:</label>
              <input type="text" id="message" placeholder="I would like to get in touch with you."/>
          </div>
          </div>
          <div className="get-form-second-wrapper">
          <div className="form-group">

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="What’s your email?"/>
          </div>
          <div className="form-group">

          <label htmlFor="email">Service interested in:</label>
          <input type="text" id="email" placeholder="Ex. Auto Loan, Home Loan"/>
          </div>
          </div>
          {/* <button className='send-msg-btn'>Send Message</button> */}
        </div>
        <div className="get-in-touch-form-background">
          <div className="background-left">
            <img src={callCenterImg} alt="" />
          </div>
          <div className="background-right">
            <img src={circleImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsGetInTouch
