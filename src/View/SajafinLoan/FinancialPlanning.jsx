import React from 'react'
import loanCardLogo from '../../assets/Group 1171275293.png'

const FinancialPlanning = () => {
  return (
    <>
      
        <div className="financial-planning-wrapper">
          <div className="financial-planning-left">
            <p className='financial-planning-heading'>Financial Planning</p>
            <h2 className='finances-heading'>Let’s plan your finances the right way </h2>
            <p className='finances-para'>Lending that doesn’t weight you down. We know how hard is it to start
            <br />something new, that’s why we have the perfect plan for you.</p>
            <button className='apply-for-loan-btn'>Apply for a loan</button>
          </div>
          <div className="financial-planning-right">
            <div className="loans-cards-wrapper">
              <div className="home-loan loan-card">
                <div className="loan-card-logo"><img src={loanCardLogo} alt="" /></div>
                <p className='home-loan-heading'>Home Loans</p>
                <div style={{display:"flex",alignItems:"center"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Lowest interest rates</p>
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Fast Loan Processing</p>
                </div>
              </div>
              <div className="car-loan loan-card">
              <div className="loan-card-logo"><img src={loanCardLogo} alt="" /></div>
                <p className='home-loan-heading'>Home Loans</p>
                <div style={{display:"flex",alignItems:"center"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Lowest interest rates</p>
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Fast Loan Processing</p>
                </div>
              </div>
              <div className="education-loan loan-card">
              <div className="loan-card-logo"><img src={loanCardLogo} alt="" /></div>
                <p className='home-loan-heading'>Home Loans</p>
                <div style={{display:"flex",alignItems:"center"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Lowest interest rates</p>
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Fast Loan Processing</p>
                </div>
              </div>
              <div className="business-loan loan-card">
              <div className="loan-card-logo"><img src={loanCardLogo} alt="" /></div>
                <p className='home-loan-heading'>Home Loans</p>
                <div style={{display:"flex",alignItems:"center"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Lowest interest rates</p>
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <i class="fa-solid fa-circle-check" style={{fontSize:"12px",color:"#DC2C1D"}}></i>
                <p className='lowest-interest'>Fast Loan Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default FinancialPlanning
