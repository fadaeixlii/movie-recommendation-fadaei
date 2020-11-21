import React, { Fragment } from 'react'
import Favorites from '../common/Favorites/Favorites'
import HeaderSearch from '../Header/HeaderSearch'

const Recommend = () => {
    return (
        <Fragment>
            <HeaderSearch />
            <div className="main-content">
                <Favorites />
            </div>
        </Fragment>
    );
}

export default Recommend;