import React, { useState } from 'react'
import Header from '../../Layout/Header.jsx'
import './Register.css'
import formImg from '../../assets/Group 1171275310.png'
import rightarrow from '../../assets/right-arrow (1) 1.png'
import { useNavigate } from 'react-router-dom'
const SetUpPassword = () => {
    const [eye,seteye]=useState(false)
    const [eye2,seteye2]=useState(false)
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
           <p className='power_para'>Unlock your Ambitions at every step</p>
           <h3>Set Up Password</h3>
           <p className='enter_email_para'>Your security is our first priority. You’ll need this to log into Sajafin Account </p>
           <form>
            <div className='form_filed_54565' style={{
                position:'relative'
            }}>
              <p>Set Password</p>
              <input type={eye ? 'text' :'password'} placeholder='Enter your password'/>
             {eye == true ? <i onClick={(()=>seteye(!eye))} style={{
                position:'absolute',
                right:'20px',
                cursor:'pointer',
                top:'45px',
                color:' rgba(69, 90, 100, 1)'
              }} class="fa-solid fa-eye"></i> :<i onClick={(()=>seteye(!eye))} style={{
                position:'absolute',
                right:'20px',
                cursor:'pointer',
                top:'45px',
                color:' rgba(69, 90, 100, 1)'
              }} class="fa-solid fa-eye-slash"></i> }
            </div>

            <div className='form_filed_54565' style={{
                position:'relative'
            }}>
              <p>Confirm Password</p>
              <input type={eye2 ? 'text' :'password'} placeholder='Enter your password'/>
              {eye2 == true ? <i onClick={(()=>seteye2(!eye2))} style={{
                position:'absolute',
                right:'20px',
                cursor:'pointer',
                top:'45px',
                color:' rgba(69, 90, 100, 1)'
              }} class="fa-solid fa-eye"></i> :<i onClick={(()=>seteye2(!eye2))} style={{
                position:'absolute',
                right:'20px',
                cursor:'pointer',
                top:'45px',
                color:' rgba(69, 90, 100, 1)'
              }} class="fa-solid fa-eye-slash"></i> }
            </div>
            <button onClick={(()=>navigate('/mobile-number'))} className='submit_btn_56585' type='submit'>Submit Now</button>
           </form>
           <div onClick={(()=>navigate('/get-started'))} className='back_wrapper'>
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

export default SetUpPassword
