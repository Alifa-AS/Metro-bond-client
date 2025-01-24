import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import img from '../../../assets/Home-img/Home.png'
import img2 from '../../../assets/Home-img/Home2.png'
import img3 from '../../../assets/Home-img/Home3.png'
import img4 from '../../../assets/Home-img/Home4.jpg'
import img5 from '../../../assets/Home-img/Home5.png'
import img6 from '../../../assets/Home-img/Home6.png'

const Banner = () => {
    return (
        <Carousel>
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
            </Carousel>
    );
};

export default Banner;