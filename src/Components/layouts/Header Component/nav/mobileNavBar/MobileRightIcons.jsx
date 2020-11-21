import React from 'react'
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import MovieContext from '../../../../MovieRecContext';
import LoginRegisterIcon from '../LoginRegisterIcon';
import MobileNotif from './MobileNotif';
import MobileProfileIcon from './MobileProfileIcon';

const MobileRightIcons = () => {
    const context = useContext(MovieContext);
    return (
        <div className="mobile-more-menu">
            <Link to="/" className="more-toggle" id="dropdownMenuButton"
                data-toggle="more-toggle" aria-haspopup="true" aria-expanded="false">
                <i className="ri-more-line"></i>
            </Link>
            <div className="more-menu" aria-labelledby="dropdownMenuButton">
                <div className="navbar-right position-relative">
                    <ul className="d-flex align-items-center justify-content-end list-inline m-0">

                        <li className="nav-item nav-icon">
                            <MobileNotif />
                        </li>
                        <li>
                            <MobileProfileIcon />
                            {
                                context.isLogined ? (<MobileProfileIcon />) : (<LoginRegisterIcon />)
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileRightIcons;