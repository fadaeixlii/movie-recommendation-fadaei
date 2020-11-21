import React, { useContext } from 'react'
import MovieContext from '../../MovieRecContext';
import SingleSlide from './singleSlide';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainSlider = () => {
    const { SliderItems } = useContext(MovieContext);
    // useEffect(()=>{
    //     $('#tvshows-slider')
    // },[])
    // const settingSlider = {
    //     centerMode: true,
    //     centerPadding: '200px',
    //     slidesToShow: 1,
    //     nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
    //     prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
    //     arrows: true,
    //     dots: false,
    //     responsive: [{
    //         breakpoint: 991,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '20px',
    //             slidesToShow: 1
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '20px',
    //             slidesToShow: 1
    //         }
    //     }
    //     ]
    // }
    const setting={
        dots: true,
        autoplay: true,
        arrows: true
    }
    return (
        <section className="iq-main-slider p-0">
            <Slider {...setting}>
                {
                    SliderItems.map(slide => (
                        <SingleSlide id={slide.id} key={slide.id}
                            imgURL={slide.imgURL}
                            genre={slide.genre}
                            releaseDate={slide.releaseDate}
                            name={slide.name} />
                    ))
                }
            </Slider>



        </section>
    );
}

export default MainSlider;