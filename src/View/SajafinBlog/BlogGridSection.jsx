import React from 'react'

const BlogGridSection = () => {
  return (
    <>
      <div className="uni_container">
        <div className="blog-grid-wrapper">
          <div className="blog-navbar-section">
            <div className="blog-navlinks">
              <div className="latest"></div>
              <div className="loan"></div>
              <div className="credit-card"></div>
              <div className="business"></div>
            </div>
            <div className="blog-search-section">
            <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Search'/>
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGridSection
