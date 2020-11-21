import React, { useState } from 'react'
import MovieContext from './MovieRecContext';

const GlobalState = (props) => {
    const [MovieFavoritesPoster, setMovieFavoritesPoster] = useState([
        {
            id: 1,
            imgURL: "images/favorite/01.jpg",
            name: "Champions",
            releaseDate: "2017",
            genre: "action"
        },
        {
            id: 2,
            imgURL: "images/favorite/02.jpg",
            name: "Last Race",
            releaseDate: "2019",
            genre: "action/racing"
        },
        {
            id: 3,
            imgURL: "images/favorite/03.jpg",
            name: "Boop Bitty",
            releaseDate: "2017",
            genre: "baby"
        },
        {
            id: 4,
            imgURL: "images/favorite/04.jpg",
            name: "Dino Land",
            releaseDate: "2020",
            genre: "animation"
        },
        {
            id: 5,
            imgURL: "images/favorite/02.jpg",
            name: "Last Race",
            releaseDate: "2019",
            genre: "action/racing"
        },
        {
            id: 6,
            imgURL: "images/favorite/01.jpg",
            name: "Champions",
            releaseDate: "2017",
            genre: "action"
        },
        {
            id: 7,
            imgURL: "images/favorite/04.jpg",
            name: "Dino Land",
            releaseDate: "2020",
            genre: "animation"
        },
        {
            id: 8,
            imgURL: "images/favorite/03.jpg",
            name: "Boop Bitty",
            releaseDate: "2017",
            genre: "baby"
        }
    ]);
    const [SliderItems, setSliderItems] = useState([
        {
            id: 1,
            imgURL: "images/movie-banner/1.jpg",
            name: "Open Dead Shot",
            releaseDate: "2020",
            genre: "horror"
        },
        {
            id: 2,
            imgURL: "images/movie-banner/2.jpg",
            name: "Jumbo Queen",
            releaseDate: "2018",
            genre: "neture"
        },
        {
            id: 3,
            imgURL: "images/movie-banner/3.jpg",
            name: "The Lost Journey",
            releaseDate: "2016",
            genre: "adventure"
        }

    ]);

    const [News, setNews] = useState([
        {
            imgURL:"images/new/stuff_img1.jpg",
            title: "یک اخبار نمونه ",
            month: "Nov",
            day: 17,
            desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری...",
            category: "Technology"
        },
        {
            imgURL:"images/new/stuff_img1.jpg",
            title: "یک اخبار نمونه ",
            month: "Nov",
            day: 17,
            desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری...",
            
            category: "Technology"
        },
        {
            imgURL:"images/new/stuff_img1.jpg",
            title: "یک نمونه اخبار ",
            month: "Nov",
            day: 17,
            desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری...",
            category: "Technology"
        },
        {
            imgURL:"images/new/stuff_img1.jpg",
            title: "یک نمونه اخبار ",
            month: "Nov",
            day: 17,
            desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری...",
            category: "Technology"
        }


    ]);

    const [isLogined, setIsLogined] = useState(false);




    return (
        <MovieContext.Provider
            value={{
                MovieFavoritesPoster: MovieFavoritesPoster,
                setMovieFavoritesPoster: setMovieFavoritesPoster,
                SliderItems: SliderItems,
                setSliderItems: setSliderItems,
                isLogined: isLogined,
                setisLogined: setIsLogined,
                News: News,
                setNews: setNews
            }}
        >

            {props.children}
        </MovieContext.Provider>
    );
}

export default GlobalState;