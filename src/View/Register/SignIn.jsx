import react, { useState } from 'react'
import Header from '../../Layout/Header.jsx'
import './Register.css'
import formImg from '../../assets/Group 1171275310.png'
import rightarrow from '../../assets/right-arrow (1) 1.png'
const SignIn = () => {
      const [eye,seteye]=useState(false)
      const [eye2,seteye2]=useState(false)
  return (
    <>
                  <div className='uni_container' >
      <Header/>
      <div className='get_started_form_wrapper' style={{
        display:'flex',
        alignItems:'center'
      }}>
        <div className='get_started_left'>
           <p className='power_para'>The Power of Financial Freedom</p>
           <h3>Sign in to Sajafin</h3>
           <p className='enter_email_para'>Sign into your Sajafin account and simplify your finances.</p>
           <form>

           <div className='form_filed_54565'>
              <p>Enter Your Email ID</p>
              <input type="email" placeholder='Your Email ID here'/>
            </div>
            <div className='form_filed_54565' style={{
                position:'relative'
            }}>
              <p>Enter Password</p>
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
            <div style={{
              display:'flex',
              justifyContent:'end'
            }}>
            <p style={{
            color: 'rgba(103, 103, 103, 1)',
            fontSize:'12px',
            marginTop:'8px'

           }}>Forgot Password?</p>
            </div>
          
            
            <button className='submit_btn_56585' type='submit'>Login</button>
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

export default SignIn
