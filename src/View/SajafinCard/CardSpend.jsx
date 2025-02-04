import React from 'react'
import spendImg from '../../assets/spend-img.png'

const CardSpend = () => {
  return (
    <>
    <div className="uni_container">
      <div className="card-spend-section">
        <div className="card-spend-left-section">
          <img src={spendImg} alt="" />
        </div>
        <div className="card-spend-right-section">
          <p className='feel-great-heading'>Feel Great When You Spend</p>
          <p className='feel-great-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className='spend-read-more-btn'><span>Read More</span><i class="fa-solid fa-arrow-right" style={{color:"#DC2C1D"}}></i></p>
        </div>
      </div>
    </div>  
    </>
  )
}

export default CardSpend
