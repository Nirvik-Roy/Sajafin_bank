import React from 'react'
import './SajafinHome.css'
import image from '../../assets/Image (2).png'
import arrow from '../../assets/Vector (6).png'
const Ipdcataglance = () => {
    return (
        <>
            <div className='uni_container'>
                <div className='ipdc_wrapper'>
                    <div className='ipdc_left_div'>
                        <img src={image} />
                    </div>
                    <div className='ipdc_right_div'>
                        <div className='right_content_div'>
                            <h1>IPDC AT A GLANCE</h1>
                            <p>IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
                        </div>
                        <p className='read_more_para'>Read more <img src={arrow}/></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ipdcataglance
