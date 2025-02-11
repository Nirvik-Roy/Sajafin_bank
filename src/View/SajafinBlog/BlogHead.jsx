import React from 'react'
import BlogHeadImg from '../../assets/Group 1171275311.png'

const BlogHead = () => {
  return (
    <>
    <div className="blog-head-container">
    <div className="blog-head-wrapper">
        <div className="blog-head-left">
          <h2 className='blog-heading'>Blog</h2>
          <p className='home-to-blog-link'>Home <i class="fa-solid fa-arrow-right"></i> Blog</p>
        </div>
        <div className="blog-head-right">
          <img src={BlogHeadImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogHead
