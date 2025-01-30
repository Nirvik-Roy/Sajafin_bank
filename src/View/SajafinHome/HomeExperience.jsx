import React from 'react'
import circle from '../../assets/Circle Layer.png'
import img2 from '../../assets/Scenery.png'
import img3 from '../../assets/Object Ungroup.png'
import img4 from '../../assets/User Arrows (1).png'
import img5 from '../../assets/Rocket.png'
import img6 from '../../assets/Bag.png'
import img7 from '../../assets/Cube.png'
const HomeExperience = () => {
    const data=[
        {img:circle,
         title:'Integrity',
         content:'Displaying the highest level of Integrity in the way we conduct our business'
        },
        {img:img2,
            title:'Demonstrate',
            content:'Demonstrating a strong Will to Win in the market place'
           },
           {img:img3,
            title:'Diversity',
            content:'Promoting Diversity in the work place and community'
           },
           {img:img4,
            title:'Teamwork',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen'
           },
           {img:circle,
            title:'Collaboration',
            content:'Displaying the highest level of Integrity in the way we conduct our business'
           },
           {img:img5,
            title:'Technology',
            content:'Harnessing the power of Technology to deliver better customer experience'
           },
           {img:img6,
            title:'Corporate',
            content:'Setting the standard for the best Corporate Citizenship in the communities we work'
           },
           {img:img7,
            title:'Digital',
            content:'Setting the standard for the best Corporate Citizenship in the communities we work'
           },
    ]
  return (
    <>
      <div className='uni_container'>
      <div className='experience_wrapper'>
      <h1>Creating Extraordinary Customer Experience</h1>
      <p className='experience_head'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>

      <div className='experience_cards_wrapper'>
      {data.map((e,i)=>{
        return(
            <>
            <div key={i} className='experiene_card'>
              <div className='img_div'>
                <img src={e.img}/>
              </div>
              <h4>{e.title}</h4>
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

export default HomeExperience
