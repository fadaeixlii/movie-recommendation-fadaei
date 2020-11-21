import React, { useContext } from 'react'
import MovieContext from '../../../MovieRecContext';
import LoginRegisterIcon from './LoginRegisterIcon';
import NotifIcon from './RightNavbar/notifIcon';
import ProfileIcon from './RightNavbar/ProfileIcon';

const RightNavBar = () => {
    const context = useContext(MovieContext);
    return (
        <div className="navbar-right menu-right">
            <ul className="d-flex align-items-center list-inline m-0">
                
                <li className="nav-item nav-icon">
                    <NotifIcon/>
                </li>
                <li className="nav-item nav-icon">
                    {
                        context.isLogined ? (<ProfileIcon/>) : (<LoginRegisterIcon/>)
                    }
                    
                </li>
            </ul>
        </div>
    );
}

export default RightNavBar;