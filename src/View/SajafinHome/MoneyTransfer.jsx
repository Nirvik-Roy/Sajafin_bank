import React from 'react'
import dotted_img from '../../assets/styles.png'
import transfer_card_img1 from '../../assets/Group 5.png'
import transfer_card_img2 from '../../assets/Group 5 (1).png'
import card_logo_1 from '../../assets/Group 1171275285.png'
import card_logo_2 from '../../assets/Group 1171275286.png'
import card_logo_3 from '../../assets/Group 1171275287.png'

const MoneyTransfer = () => {
  return (
    <>
    <div className="uni_container">
    <div className="transfer-money-header">
        <img src={dotted_img} alt="" />
        <p>Other ways of transferring money</p>
      </div>
      <div className="money-transfer-cards-wrapper">
        <div className="money-transfer-card">
          <div className="money-transfer-card-left">
            <div className="transfer-logo">
              <img src={card_logo_1} alt="" />
            </div>
            <div className="transfer-content">
              <p className='transfer-card-text1'>Fixed Deposits & Foreign Currency Accounts</p>
              <h2 className='transfer-card-heading'>Make the most of your foreign currencies</h2>
              <p className='transfer-card-text2'>Take advantage of higher interest rates on foreign currencies in our Fixed Deposit Accounts, accessible via Online Banking</p>
            </div>
          </div>
          <div className="money-transfer-card-right">
            <img src={transfer_card_img1} alt="" />
          </div>
        </div>
        <div className="money-transfer-card" style={{marginTop:"30px"}}>
        <div className="money-transfer-card2-left">
        <img src={transfer_card_img2} alt="" />    
          </div>
          <div className="money-transfer-card2-right">
          <div className="transfer-logo">
            <img src={card_logo_2} alt="" />
          </div>
            <div className="transfer-content">
              <p className='transfer-card-text1'>Fixed Deposits & Foreign Currency Accounts</p>
              <h2 className='transfer-card-heading'>Make the most of your foreign currencies</h2>
              <p className='transfer-card-text2'>Take advantage of higher interest rates on foreign currencies in our Fixed Deposit Accounts, accessible via Online Banking</p>
            </div>
          </div>
        </div>
        <div className="money-transfer-card" style={{marginTop:"30px"}}>
        <div className="money-transfer-card-left">
            <div className="transfer-logo">
              <img src={card_logo_3} alt="" />
            </div>
            <div className="transfer-content">
              <p className='transfer-card-text1'>Fixed Deposits & Foreign Currency Accounts</p>
              <h2 className='transfer-card-heading'>Make the most of your foreign currencies</h2>
              <p className='transfer-card-text2'>Take advantage of higher interest rates on foreign currencies in our Fixed Deposit Accounts, accessible via Online Banking</p>
            </div>
          </div>
          <div className="money-transfer-card-right">
            <img src={transfer_card_img1} alt="" />
          </div>
        </div>
      </div>
      <div className="transfer-money-footer">
        <img src={dotted_img} alt="" />
      </div>
    </div>    
    </>
  )
}

export default MoneyTransfer
