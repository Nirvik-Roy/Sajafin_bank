import React from 'react'
import choosecard1 from '../../assets/Rectangle 90.png'
import choosecard2 from '../../assets/Rectangle 90 (1).png'
import choosecard3 from '../../assets/Rectangle 90 (2).png'

const ChooseCard = () => {
  return (
    <>
      <div className="uni_container">
        <div className="choose-card-section">
          <p className='grow-confidance-heading'>Grow your confidance</p>
          <h2 className='choose-card-heading'>Choose the Card that Matches Your Needs</h2>
          <p className='choose-carad-para'>All your needs covered with a full range of credit and debit cards</p>
          <div className="choose-cards-wrapper">
            <div className="choose-card">
              <img src={choosecard1} alt="" />
            </div>
            <div className="choose-card">
              <img src={choosecard2} alt="" />
            </div>
            <div className="choose-card">
              <img src={choosecard3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseCard
