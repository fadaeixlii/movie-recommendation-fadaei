import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const LoginRegisterIcon = () => {
    return (
        <Fragment>
            <div className="mx-1 hoverColor">

                <i className="fa fa-user-plus"></i><NavLink to="/register" className="mx-1 hoverColor">ثبت نام</NavLink>
            </div>

            <div className="mx-1 hoverColor">
                <i className="fa fa-sign-in"></i><NavLink to="/login" className="mx-1 hoverColor">ورود</NavLink>

            </div>
        </Fragment>
    );
}

export default LoginRegisterIcon;