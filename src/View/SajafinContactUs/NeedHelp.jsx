import React from 'react'
import handShackLogo from '../../assets/Ellipse 217 (2).png'
import headPhoneLogo from '../../assets/Ellipse 217 (1).png'
import browserLogo from '../../assets/Ellipse 217.png'

const NeedHelp = () => {
  return (
    <>
      <div className="uni_container">
        <div className="need-help-wrapper">
          <p className='reach-out-para'>You can reach out to us for all your</p>
          <h2 className='need-more-help-heading'>Need More Help?</h2>
          <p className='complains-para'>Queries, complains and feedback. We will be happy to serve you.</p>
          <div className="need-help-cards-wrapper">
            <div className="need-help-card">
              <div className="need-help-card-logo">
                <img src={handShackLogo} alt="" />
              </div>
              <p className='need-card-sales-heading'>Sales</p>
              <p className='need-card-mail'>sales@sajafin.com</p>
            </div>
            <div className="need-help-card">
            <div className="need-help-card-logo">
                <img src={headPhoneLogo} alt="" />
              </div>
              <p className='need-card-sales-heading'>Sales</p>
              <p className='need-card-mail'>sales@sajafin.com</p>
            </div>
            <div className="need-help-card">
            <div className="need-help-card-logo">
                <img src={browserLogo} alt="" />
              </div>
              <p className='need-card-sales-heading'>Sales</p>
              <p className='need-card-mail'>sales@sajafin.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NeedHelp
