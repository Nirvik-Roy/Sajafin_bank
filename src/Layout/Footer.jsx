import React from 'react'
import sajafinLogo from '../assets/image.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      
        <div className="footer-wrapper">


          <div className="company-info-div">
            <div className="company-logo">
              <img src={sajafinLogo} alt="" />
            </div>
           <p className='company-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="registration-btns">
              <input type="text" placeholder='Email Address'/>
              <div className="register-btn">Register</div>
            </div>
          </div>


          <div className="about-us-links-div">
            <h2>About Us</h2>
            <div className="about-us-links-wrapper">
            <NavLink className="about-us-link">Careers with us</NavLink>
            <NavLink className="about-us-link">Community Engagement</NavLink>
            <NavLink className="about-us-link">Financial Results</NavLink>
            <NavLink className="about-us-link">Media Centre</NavLink>
            <NavLink className="about-us-link">Investor Relations</NavLink>
            <NavLink className="about-us-link">Modern Slavery Act</NavLink>
            </div>
            
          </div>


          <div className="product-documents-links-div">
          <h2>Product Documents</h2>
          <div className="product-documents-links-wrapper">
          <NavLink className="about-us-link">Terms and Conditions</NavLink>
            <NavLink className="about-us-link">Key Facts Statement (KFS)</NavLink>
            <NavLink className="about-us-link">Application Forms</NavLink>
            <NavLink className="about-us-link">Schedule of Charges</NavLink>
          </div>
            
          </div>


          <div className="customer-support-div">
            <h2>Customer support</h2>
            <div className="customer-support-links-wrapper">
              <NavLink className="about-us-link">How to reach us</NavLink>
              <NavLink className="about-us-link">Debt Assist</NavLink>
              <NavLink className="about-us-link">Ways of banking</NavLink>
              <NavLink className="about-us-link">Update your information</NavLink>
              <NavLink className="about-us-link">Help and Support</NavLink>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Footer
