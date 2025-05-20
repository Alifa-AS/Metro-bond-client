import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import img from '../../../assets/Home-img/1.png'
import img2 from '../../../assets/Home-img/2.png'
import img3 from '../../../assets/Home-img/3.png'
import img4 from '../../../assets/Home-img/4.png'
import img5 from '../../../assets/Home-img/5.png'
import img6 from '../../../assets/Home-img/6.png'
import img7 from '../../../assets/Home-img/7.png'

const Banner = () => {
    return (
        <Carousel  
        autoPlay           
        infiniteLoop       
        interval={4000}    
        showThumbs={false} 
        showStatus={false} 
        stopOnHover={false}
        >
                <div>
                    <img src={img} />                  
                </div>
                <div>
                    <img src={img2} />                   
                </div>
                <div>
                    <img src={img3} />                   
                </div>
                <div>
                    <img src={img4} />                    
                </div>
                <div>
                    <img src={img5} />                    
                </div>
                <div>
                    <img src={img6} />                  
                </div>
                <div>
                    <img src={img7} />
                </div>
            </Carousel>
    );
};

export default Banner;