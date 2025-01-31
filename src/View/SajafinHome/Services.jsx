import React from 'react'
import card1_img from '../../assets/image (6).png'
import card2_img from '../../assets/Image (7).png'
import card3_img from '../../assets/Image (8).png'
import card4_img from '../../assets/Image (9).png'


const Services = () => {
  return (
    <>
      <div className="uni_container">
        <div className="services-wrapper">
          <h2 className='services-heading'>Our Services</h2>
          <p className='services-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
          <div className="services-cards-wrapper">
            <div className="card">
              <img src={card1_img} alt="" />
              <div className="card-text">
                <p>IPDC SAVING SCHEMES</p>
                <div className="red-circle"></div>
              </div>
            </div>
            <div className="card">
              <img src={card2_img} alt="" />
              <div className="card-text">
                <p>IPDC SAVING SCHEMES</p>
                <div className="red-circle"></div>
              </div>
            </div>
            <div className="card">
              <img src={card3_img} alt="" />
              <div className="card-text">
                <p>IPDC SAVING SCHEMES</p>
                <div className="red-circle"></div>
              </div>
            </div>
            <div className="card">
              <img src={card4_img} alt="" />
              <div className="card-text">
                <p>IPDC SAVING SCHEMES</p>
                <div className="red-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
