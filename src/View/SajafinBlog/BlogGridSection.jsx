import React from 'react'

const BlogGridSection = () => {
  return (
    <>
      <div className="uni_container">
        <div className="blog-grid-wrapper">
          <div className="blog-grid-left">
            <div className="blog-navbar">
              <div className="blog-navlink">Latest</div>
              <div className="blog-navlink">Loan</div>
              <div className="blog-navlink">Credit Card</div>
              <div className="blog-navlink">Business</div>
            </div>
            <div className="blog-left-cards-wrapper">
              <div className="blog-left-card"></div>
              <div className="blog-left-card"></div>
              <div className="blog-left-card"></div>
              <div className="blog-left-card"></div>
              <div className="blog-left-card"></div>
            </div>
          </div>
          <div className="blog-grid-right">
            <div className="blog-search-section">
            <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" />
              <button>Search</button>
            </div>
            <div className="follow-us">
            <p>Follow Our Journey</p>
            <div className="follow-us-social-media">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGridSection
