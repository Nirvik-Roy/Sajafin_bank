import React from 'react'
import dreamBigImg from '../../assets/Manage money-bro 1.png'

const DreamBig = () => {
  return (
    <>
      <div className="dream-big-wrapper">
        <div className="dream-big-left">
          <p className='future-heading'>Build the Future You See for Yourself</p>
          <h1 className='freedom-heading'>Enjoy The Freedom
          To Dream Big</h1>
          <p className='future-para'>Fulfil your dreams with our loan products. Money shouldn’t just
          work for some of us. It should work for all of us.</p>
          <button className='loan-apply-now-btn'>Apply Now</button>
        </div>
        <div className="dream-big-right">
          <img src={dreamBigImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default DreamBig
