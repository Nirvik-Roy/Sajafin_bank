import React, { useEffect, useState } from 'react'
import logo from '../assets/image.png'
import arrow from '../assets/image (1).png'
import {NavLink, useNavigate} from 'react-router-dom'
const Header = () => {

  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [accountsDropdownOpen, setAccountsDropdownOpen] = useState(false);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
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
          
          <NavLink to="/blog" className="nav_links">
        Blog
          </NavLink>
          <button onClick={(()=>navigate('/get-started'))} style={{
            cursor:'pointer'
          }} className="open_account_btn">Open Account</button>
        </div>



        <div className="hamburger-button" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
        <i class="fa-solid fa-bars"></i>
        </div>


        {mobileMenuOpen && <div className="sidebar">
          <div className="cross-button" style={{display:'flex',justifyContent:"flex-end"}} onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}><i class="fa-regular fa-circle-xmark"></i></div>

          
          <div className="sidebar-links-wrapper">
          <NavLink to="/"><i className="fa-solid fa-house" style={{marginRight:"8px"}}></i> Home</NavLink>
        <NavLink to="/about-us"><i className="fa-solid fa-address-card" style={{marginRight:"8px"}}></i> About Us</NavLink>

        {/* Product Dropdown */}
      <div className="sidebar-dropdown">
        <button
          className="sidebar-dropdown-button"
          onClick={() => setProductDropdownOpen(!productDropdownOpen)}
          style={{ border: "none", background: "none" }}
          aria-expanded={productDropdownOpen}
        >
          <i className="fa-solid fa-cubes-stacked" style={{marginRight:"8px"}}></i> Product{" "}
          <i class="fa-solid fa-angle-down"></i>
        </button>
        {productDropdownOpen && (
          <div className="sidebar-dropdown-menu">
            <NavLink to="/cards" className="sidebar-dropdown-item">
              Cards
            </NavLink>
            <NavLink to="/loan" className="sidebar-dropdown-item">
              Loans
            </NavLink>
          </div>
        )}
      </div>

      {/* Accounts Dropdown */}
      <div className="sidebar-dropdown">
        <button
          className="sidebar-dropdown-button"
          onClick={() => setAccountsDropdownOpen(!accountsDropdownOpen)}
          style={{ border: "none", background: "none" }}
          aria-expanded={accountsDropdownOpen}
        >
          <i className="fa-solid fa-user" style={{marginRight:"8px"}}></i> Accounts{" "}
          <i class="fa-solid fa-angle-down"></i>
        </button>
        {accountsDropdownOpen && (
          <div className="sidebar-dropdown-menu">
            <NavLink to="/savings-account" className="sidebar-dropdown-item">
              Savings
            </NavLink>
            <NavLink to="/normal-account" className="sidebar-dropdown-item">
              Account
            </NavLink>
          </div>
        )}
      </div>

      <NavLink to="/contact-us">
        <i className="fa-solid fa-envelope" style={{marginRight:"8px"}}></i> Contact Us
      </NavLink>
      <NavLink to="/blog">
        <i className="fa-solid fa-blog" style={{marginRight:"8px"}}></i> Blog
      </NavLink>

          <button className='sidebar-open-account-btn'>Open Acccount</button>
          </div>
        
        </div>}
      </div>
    </div>

    </>
  )
}

export default Header
