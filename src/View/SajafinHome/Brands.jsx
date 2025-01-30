import React from 'react'
import image1 from '../../assets/image 3.png'
import image2 from '../../assets/image 4.png'
import image3 from '../../assets/image 5.png'
import image4 from '../../assets/image 6.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Brands = () => {
    const NextArrow = () => null;
    const PrevArrow = () => null;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        
      };
  return (
    <>
      <div className='uni_container'>
        <div className='brands_wrapper'>
            <div className='brands_div'>
                <h2>BUSINESS PARTNERS</h2>
                <div
                 className='brands_logo_wrapper'
                 >
            
                 <Slider {...settings}>
                  
                  <div className='brands_logo'>
                      <img src={image1}/>
                  </div>
               

             
                  <div className='brands_logo'>
                      <img src={image2}/>
                  </div>
             

               
                  <div className='brands_logo'>
                      <img src={image3}/>
                  </div>
               

              
                  <div className='brands_logo'>
                      <img src={image4}/>
                  </div>
               
               </Slider>
               
             
                  
                   
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Brands
