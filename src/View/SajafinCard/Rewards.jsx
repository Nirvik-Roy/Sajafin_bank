import React from 'react'

const Rewards = () => {
  return (
    <>
    <div className="uni_container">
      <div className="rewards-wrapper">
        <div className="reward-section">
          <h2 className='reward-heading'>Rewards So Awesome <br /> You’ll be Spoiled for Choice</h2>
        </div>
        <div className="giftcard-section">
        <div className="giftcards-wrapper">
        <div className="cashback-div" style={{textAlign:"center"}}>
            <p className='giftcard-bold-text'>5%-10%</p>
            <p className='giftcard-color-text'>Cashback</p>
          </div>
          <div className="merchant-div" style={{textAlign:"center"}}>
            <p className='giftcard-bold-text'>10k+</p>
            <p className='giftcard-color-text'>Merchants</p>
          </div>
          <div className="friends-giftcard-div" style={{textAlign:"center"}}>
            <p className='giftcard-bold-text'>Giftcards</p>
            <p className='giftcard-color-text'>For your friends & family</p>
          </div>
        </div> 
        <button className='giftcard-apply-now-btn'>Apply Now</button>  
        </div>
      </div>
    </div>
    </>
  )
}

export default Rewards
