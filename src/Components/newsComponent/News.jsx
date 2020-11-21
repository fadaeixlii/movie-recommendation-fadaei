import React, { Fragment, useContext } from 'react'
import MainSlider from '../common/Slider/Slider';
import MovieContext from '../MovieRecContext';
import NewSinglePost from './newSinglePost';

const News = () => {
    const context = useContext(MovieContext);
    return (
        <Fragment>
                <MainSlider/>
                <div className=" row justify-content-center mt-3 w-100">
                    {context.News.map(news => (
                        <NewSinglePost title={news.title} month={news.month}
                            day={news.day} desc={news.desc} category={news.category}
                            imgURL={news.imgURL}
                        />
                    ))}
                </div>
        </Fragment>
    );
}

export default News;