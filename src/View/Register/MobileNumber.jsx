import React, { useState } from 'react'
import Header from '../../Layout/Header.jsx'
import './Register.css'
import formImg from '../../assets/Group 1171275310.png'
import rightarrow from '../../assets/right-arrow (1) 1.png'
import flag from '../../assets/flag 1.png'
import down from '../../assets/play 1.png'
import { useNavigate } from 'react-router-dom'
const MobileNumber = () => {
  const navigate = useNavigate()
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
           <h3>What’s the best <br/>
Number to reach <br/>
you on? </h3>
           <p className='enter_email_para'>We don’t send spam, just important information you must know </p>
           <form>
            <div className='form_filed_54565' style={{
                position:'relative'
            }}>
              <p>Mobile Number</p>
              <input type={'text' } style={{
                paddingLeft:'75px'
              }}/>
              <div className='flag_div_wrapper'>
                <img className='flag_img' src={flag}/>
                 <img className='down_img' src={down}/>
                 <p>+91</p>
              </div>
            </div>

            <button onClick={(()=>navigate('/verification'))} className='submit_btn_56585' type='submit'>Submit Now</button>
           </form>
           <div onClick={(()=>navigate('/set-password'))} className='back_wrapper'>
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

export default MobileNumber
