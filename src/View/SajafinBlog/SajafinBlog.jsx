import React from 'react'
import './SajafinBlog.css'
import Header from '../../Layout/Header'
import OpenAccount from '../SajafinCard/OpenAccount.jsx'
import Footer from '../../Layout/Footer.jsx'
import BlogHead from './BlogHead.jsx'
import BlogGridSection from './BlogGridSection.jsx'

const SajafinBlog = () => {
  return (
    <>
      <div className="uni_container" style={{position:"relative"}}>
        <Header />
      </div>
      <BlogHead />
      <BlogGridSection />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default SajafinBlog
