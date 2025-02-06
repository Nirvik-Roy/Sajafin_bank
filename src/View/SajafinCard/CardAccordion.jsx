import React from 'react'

const CardAccordion = () => {
  const data = [
    {
      id: 1,
      questions: 'How do I locate the nearest branch or ATM?'
    },
    {
      id: 2,
      questions: 'What do I do if I lose my card or it gets stolen?',
    },
    {
      id: 3,
      questions: 'What is your customer service number?'
    },
    {
      id: 4,
      questions: 'How do I reset my pin?'
    },
    {
      id: 5,
      questions: 'What is required to use Digital Banking?'
    },
    {
      id: 6,
      questions: 'Is digital banking secure?'
    },
  ]
  return (
    <>
      <div className="uni_container">
        <div className="cards-accordion-wrapper">
            <p className='card-accordion-head1'>If you have question, we have answer</p>
            <p className='card-accordion-head2'>Frequently asked questions</p>
            <p className='card-accordion-head3'>Get answers to all questions you have and boost your knowledge so you can save , <br />
            invest and spend smarter. <span>See all questions here.</span></p>
            {data.map((item,index)=>(
                <div className='card-accordion-item' key={index}>
                  <p>{item.questions}</p>
                  <p><i class="fa-solid fa-plus" style={{fontSize:"22px", color:"#DC2C1D"}}></i></p>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default CardAccordion
