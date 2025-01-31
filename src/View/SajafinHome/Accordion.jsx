import React, { useState } from 'react'

const Accordion = () => {
  const questions = [
    {
      id: 1,
      questions: 'What is the Direct or Instant Money Transfer (DMT/ IMT)?'
    },
    {
      id: 2,
      questions: 'How Domestic Money Transfer (DMT) is different from traditional Fund Transfers?'
    },
    {
      id: 3,
      questions: 'Who is eligible for requesting Direct Money Transfer(DMT)?'
    },
    {
      id: 4,
      questions: 'Does the Direct Money Transfer (DMT) service available only during branch hours?'
    },
    {
      id: 5,
      questions: 'From where can the customer obtain Direct Money Transfer (DMT) services?'
    },
    {
      id: 6,
      questions: 'What are the pre-requisites for initiating a Direct Money Transfer (DMT) transaction?'
    },
  ]
  return (
    <>
      <div className="accordion-wrapper">
        <h1>How can we help?</h1>
        <div className="accordion">
        {questions.map((item, index) => (
          <div className="accordion-item" key={index}>
            <p>{item.questions}</p>
            <span><i class="fa-solid fa-plus"></i></span>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Accordion
