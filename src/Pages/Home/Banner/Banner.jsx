import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import img from '../../../assets/Home-img/Home.png'
import img2 from '../../../assets/Home-img/Home2.png'
import img3 from '../../../assets/Home-img/Home3.png'
import img4 from '../../../assets/Home-img/Home4.png'
import img5 from '../../../assets/Home-img/Home5.png'
import img6 from '../../../assets/Home-img/Home6.png'
import img7 from '../../../assets/Home-img/Home7.png'

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