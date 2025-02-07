import React from 'react'
import HomeOwnerImg from '../../assets/Group 1171275319.png'
import taxImg from '../../assets/Group 1171275316.png'
import BlogRightCardImg1 from '../../assets/Group 1171275317.png'
import BlogRightCardImg2 from '../../assets/Group 1171275318.png'


const BlogGridSection = () => {
  return (
    <>
      <div className="uni_container">
        <div className="blog-grid-wrapper">
          <div className="blog-grid-left">
            <div className="blog-navbar">
              <div className="blog-navlink active">Latest</div>
              <div className="blog-navlink">Loan</div>
              <div className="blog-navlink">Credit Card</div>
              <div className="blog-navlink">Business</div>
            </div>
            <div className="blog-left-cards-wrapper">
              <div className="blog-left-card">
                <div className="blog-left-card-left">
                  <img src={HomeOwnerImg} alt="" />
                </div>
                <div className="blog-left-card-right">
                  <p className='unsecure-heading'>How Do Unsecured Homeowner
                  Loans Work?</p>
                  <div className="blog-date-div">
                  <p className='loan-para'>Loan</p>
                  <p className='blog-date'>Jan 30 2025</p>  
                  </div>
                  <p className='unsecure-para'>There are usually two kinds of loans Secured
                  loans and Unsecured loans</p>
                  <p className='blog-left-card-learn-more'>Learn More</p>
                </div>
              </div>
              <div className="blog-left-card">
              <div className="blog-left-card-left">
                  <img src={HomeOwnerImg} alt="" />
                </div>
                <div className="blog-left-card-right">
                  <p className='unsecure-heading'>How Do Unsecured Homeowner
                  Loans Work?</p>
                  <div className="blog-date-div">
                  <p className='loan-para'>Loan</p>
                  <p className='blog-date'>Jan 30 2025</p>  
                  </div>
                  <p className='unsecure-para'>There are usually two kinds of loans Secured
                  loans and Unsecured loans</p>
                  <p className='blog-left-card-learn-more'>Learn More</p>
                </div>
              </div>
              <div className="blog-left-card">
              <div className="blog-left-card-left">
                  <img src={HomeOwnerImg} alt="" />
                </div>
                <div className="blog-left-card-right">
                  <p className='unsecure-heading'>How Do Unsecured Homeowner
                  Loans Work?</p>
                  <div className="blog-date-div">
                  <p className='loan-para'>Loan</p>
                  <p className='blog-date'>Jan 30 2025</p>  
                  </div>
                  <p className='unsecure-para'>There are usually two kinds of loans Secured
                  loans and Unsecured loans</p>
                  <p className='blog-left-card-learn-more'>Learn More</p>
                </div>
              </div>
              <div className="blog-left-card">
              <div className="blog-left-card-left">
                  <img src={HomeOwnerImg} alt="" />
                </div>
                <div className="blog-left-card-right">
                  <p className='unsecure-heading'>How Do Unsecured Homeowner
                  Loans Work?</p>
                  <div className="blog-date-div">
                  <p className='loan-para'>Loan</p>
                  <p className='blog-date'>Jan 30 2025</p>  
                  </div>
                  <p className='unsecure-para'>There are usually two kinds of loans Secured
                  loans and Unsecured loans</p>
                  <p className='blog-left-card-learn-more'>Learn More</p>
                </div>
              </div>
              <div className="blog-left-card">
              <div className="blog-left-card-left">
                  <img src={HomeOwnerImg} alt="" />
                </div>
                <div className="blog-left-card-right">
                  <p className='unsecure-heading'>How Do Unsecured Homeowner
                  Loans Work?</p>
                  <div className="blog-date-div">
                  <p className='loan-para'>Loan</p>
                  <p className='blog-date'>Jan 30 2025</p>  
                  </div>
                  <p className='unsecure-para'>There are usually two kinds of loans Secured
                  loans and Unsecured loans</p>
                  <p className='blog-left-card-learn-more'>Learn More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-grid-right">
            <div className="blog-search-section">
            <i class="fa-solid fa-magnifying-glass"  style={{color:"#E12312"}}></i>
              <input type="text" placeholder='Search'/>
              <button>Search</button>
            </div>
            <div className="follow-us">
            <p className='follow-our-para'>Follow Our Journey</p>
            <div className="follow-us-social-media">
            <i class="fa-brands fa-facebook" style={{color:"#E12312"}}></i>
            <i class="fa-brands fa-square-instagram" style={{color:"#E12312"}}></i>
            <i class="fa-brands fa-twitter" style={{color:"#E12312"}}></i>
            </div>
            </div>
            <p className="popular-posts">Popular Blog Post</p>
            <div className="blog-right-card-wrapper">
              <div className="blog-right-card">
                <img src={taxImg} alt="" />
              <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
              <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={BlogRightCardImg1} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={BlogRightCardImg2} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={BlogRightCardImg1} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={taxImg} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={BlogRightCardImg1} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={taxImg} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>
              <div className="blog-right-card">
                <img src={BlogRightCardImg1} alt="" />
                <p className='blog-right-card-bold-text'>What everyone gets wrong about taxes</p>
                <p className='blog-right-card-date'>December 19,2021</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGridSection
