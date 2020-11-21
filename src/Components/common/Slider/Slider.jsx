import React, { useContext } from 'react'
import MovieContext from '../../MovieRecContext';
import SingleSlide from './singleSlide';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const MainSlider = () => {
    const {SliderItems} = useContext(MovieContext);
   
    return (
        <section className="iq-main-slider p-0 justify-content-center text-center align-items-center">
            <Carousel centerMode={true} infiniteLoop={true}>
                {
                    SliderItems.map(slide=>(
                        <SingleSlide id={slide.id} key={slide.id}
                        imgURL={slide.imgURL}
                        genre={slide.genre}
                        releaseDate={slide.releaseDate}
                        name={slide.name}/>
                    ))
                }
                
            </Carousel>
           
        </section>
    );
}

export default MainSlider;