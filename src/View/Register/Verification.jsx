import React from 'react'
import Header from '../../Layout/Header.jsx'
import './Register.css'
import formImg from '../../assets/Group 1171275310.png'
import rightarrow from '../../assets/right-arrow (1) 1.png'
const Verification = () => {
  return (
    <>
                  <div className='uni_container' >
      <Header/>
      <div className='get_started_form_wrapper' style={{
        display:'flex',
        alignItems:'center'
      }}>
        <div className='get_started_left'>
           <p className='power_para'>Get yourself the Sajafin Edge</p>
           <h3>Verified Your <br/>
           Phone Number </h3>
           <p className='enter_email_para'>A 6 digit One Time Password (OTP) 
           has been sent to your given email address which will expire 15minutes, 
           after which you will need to resend the code.</p>
           <form>
            <div style={{
                position:'relative',
                marginTop:'20px'
            }}>
              <p style={{
                fontWeight:'bold'
              }}>Enter OTP here</p>
              <div className='otp_inputs_wrapper'>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
                <input type='text' defaultValue={1} maxLength={1} minLength={1}/>
              </div>
           <p style={{
            color: 'rgba(103, 103, 103, 1)',
            fontSize:'12px',
            marginTop:'8px'

           }}>Resend Code</p>
            </div>
            <button className='submit_btn_56585' type='submit'>Submit Now</button>
           </form>
           <div className='back_wrapper'>
            <img src={rightarrow}/>
            <p>Back</p>
           </div>
        </div>
        <div className='get_started_right'>
        <img src={formImg}/>
        </div>
         
      </div>
      </div>
    </>
  )
}

export default Verification
