import React, { useEffect, useState } from 'react'
import logo from '../assets/image.png'
import arrow from '../assets/image (1).png'
import {NavLink} from 'react-router-dom'
const Header = () => {

  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [accountsDropdownOpen, setAccountsDropdownOpen] = useState(false);

  return (
    <>
    <div className=''>
    <div className="nav_wrapper">
        <div className="nav_logo_wrapper">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav_link_wrapper">
          <NavLink to="/" className="nav_links">
            Home
          </NavLink>
          <NavLink to="/about-us" className="nav_links">
            About us
          </NavLink>

          {/* Product Dropdown */}
          <div className="dropdown">
            <button style={{
              border:'none',
              background:'none'
            }}
              className="dropdown-button nav_links"
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
            >
              Product <img src={arrow} alt="arrow" />
            </button>
            {productDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/cards" className="dropdown-item">
                  Cards
                </NavLink>
                <NavLink to="/loan" className="dropdown-item">
                  Loans
                </NavLink>
              </div>
            )}
          </div>

          {/* Accounts Dropdown */}
          <div className="dropdown" style={{
            position:'relative'
          }}>
            <button
            style={{
              border:'none',
              background:'none',
            }}
              className="dropdown-button nav_links"
              onClick={() => setAccountsDropdownOpen(!accountsDropdownOpen)}
            >
              Accounts <img src={arrow} alt="arrow" />
            </button>
            {accountsDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/savings-account" className="dropdown-item">
                  Savings
                </NavLink>
                <NavLink to="/normal-account" className="dropdown-item">
                  Account
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact-us" className="nav_links">
            Contact us
          </NavLink>
          <button className="open_account_btn">Open Account</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header
