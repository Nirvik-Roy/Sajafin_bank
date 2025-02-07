import React from 'react'
import Header from '../../Layout/Header.jsx'
import './Register.css'
import formImg from '../../assets/Group 1171275310.png'
const GetStarted = () => {
  return (
    <>
    
      <div className='uni_container' >
      <Header/>
      <div className='get_started_form_wrapper'>
        <div className='get_started_left'>
           <p className='power_para'>The Power of Financial Freedom</p>
           <h3>let’s Get Started</h3>
           <p className='enter_email_para'>Please Enter your Email Address to Start Your Online Application </p>
           <form>
            <div className='form_wrapper_8989'>
              <div className='form_filed_div578'>
                <p> First Name</p>
                <input type="text" placeholder='Lorem'/>
              </div>
              <div className='form_filed_div578'>
                <p> Last Name </p>
                <input type="text" placeholder='Ipsum'/>
              </div>
            </div>
            <div className='form_filed_54565'>
              <p>Enter Your Email ID</p>
              <input type="email" placeholder='Your Email ID here'/>
            </div>

            <div className='form_filed_54565'>
              <p>Someone invited you over?</p>
              <input type="email" placeholder='Enter the referal Code'/>
            </div>

            <p className='click_para'>By clicking submit, you agree to <span>Sajafin’s Terms of Use, Privacy Policy, E-sign &
            communication Authorization.</span> </p>
            <button className='submit_btn_56585' type='submit'>Submit Now</button>
           </form>
        </div>
        <div className='get_started_right'>
        <img src={formImg}/>
        </div>
         
      </div>
      </div>
    </>
  )
}

export default GetStarted;
