import React from 'react'
import solutionImg from '../../assets/Investment data-pana 1.png'

const PersonalizedSolution = () => {
  return (
    <>
      <div className="personalized-solution-wrapper">
        <div className="personalized-solution-left">
          <img src={solutionImg} alt="" />
        </div>
        <div className="personalized-solution-right">
          <h2 className='need-heading'>Need a Personalized <br />
          Solution?</h2>
          <p className='need-para'>Get in touch with us, and we will help you to create the
          right one for your business or personal needs.</p>
          <button className='apply-for-loan-btn'>Apply for a loan</button>
        </div>
      </div>
    </>
  )
}

export default PersonalizedSolution
