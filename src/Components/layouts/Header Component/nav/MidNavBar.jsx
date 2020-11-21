import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

// const MidNavBar = () => {
//     return (
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <div className="menu-main-menu-container">
//                 <ul id="top-menu" className="navbar-nav ml-auto">
//                     <li className="menu-item">
//                         <NavLink to="/">Home</NavLink>
//                     </li>
//                     <li className="menu-item">
//                         <NavLink to="/">Tv Shows</NavLink>
//                     </li>
//                     <li className="menu-item">
//                         <NavLink to="/">Movies</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

const MidNavBar2 = () => {
    return (
        <Fragment>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
            <div className="menu-main-menu-container ">
                <ul id="top-menu" className="navbar-nav ml-auto">
                    <li className="menu-item rtl">
                        <NavLink to="/"><i className="fa fa-home mx-1"></i>خانه</NavLink>
                    </li>
                    <li className="menu-item rtl">
                        <NavLink to="/recommend"><i className="fa fa-search mx-1"></i>پیشنهاد</NavLink>
                    </li>
                    <li className="menu-item rtl">
                        <NavLink to="/news"><i className="fa fa-pencil mx-1" ></i> اخبار</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </Fragment>

    );
}

export default MidNavBar2;



// export default MidNavBar;