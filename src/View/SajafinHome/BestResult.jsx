import React from 'react'

const BestResult = () => {
  const resultdata=[
          
          {
              percentage:'57.6 bn',
              content:'LOAN PORTFOLIO'
             },
             {
              percentage:'0.95%',
              content:'CLASSIFIED LOAN PORTFOLIO'
             },
             {
              percentage:'388.5%',
              content:'CLASSIFIED LOAN Coverage'
             },
             {
              percentage:'50.4 bn',
              content:'Deposit'
             },
             {
              percentage:'6.1 bn',
              content:'Shareholders equity'
             },
            {
             percentage:'18.51%',
              content:'Capital Adequacy Ratio'
             },
             {
              percentage:'8.5 bn',
              content:'Market Capitalization'
             },
             {
              percentage:'AAA',
              content:'Credit Rating'
             },
      ]
  return (
    <>
      <div className="uni_container">
        <div className="result-wrapper">
          <h1>Our best results for the year</h1>
          <p className='result-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>

          <div className="result-cards-wrapper">
            {resultdata.map((e,i)=>{
              return(
                <>
                  <div key={i} className="result-card">
                    <h2>{e.percentage}</h2>
                    <p>{e.content}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BestResult
