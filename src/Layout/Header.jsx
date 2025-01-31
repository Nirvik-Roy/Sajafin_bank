import React from 'react'
import logo from '../assets/image.png'
import arrow from '../assets/image (1).png'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className=''>
    <div className='nav_wrapper' style={{

        zIndex:99
    }}>
        <div className='nav_logo_wrapper' style={{

zIndex:99
}}>
            <img src={logo}/>
        </div>
        <div className='nav_link_wrapper' style={{

zIndex:99
}}>
            <NavLink to={'/'} className={'nav_links'}>Home</NavLink>
            <NavLink to={'/about-us'}  className={'nav_links'}>About us</NavLink>
            <NavLink to={'/cc'}  className={'nav_links'}>Product <img src={arrow}/> </NavLink>
            <NavLink  to={'/cc'} className={'nav_links'}>Accounts <img src={arrow}/> </NavLink>
            <NavLink to={'/cc'}  className={'nav_links'}>Contact us</NavLink>
            <button className='open_account_btn'>Open Account</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header
