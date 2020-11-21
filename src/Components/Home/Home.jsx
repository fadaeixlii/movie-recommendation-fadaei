import React, { Fragment } from 'react'
import MainSlider from '../common/Slider/Slider'
import Trends from '../common/Trends/Trends'

const Home = () => {
    return (
        <Fragment>
            <MainSlider />
            <div className="main-content">

                <Trends />
            </div>
        </Fragment>
    );
}

export default Home;