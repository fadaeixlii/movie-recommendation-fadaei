import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const ProfileIcon = () => {
    return ( 
        <Fragment>
            <Link to="/" className="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                        data-toggle="search-toggle">
                        <img src="images/user/user.jpg" className="img-fluid avatar-40 rounded-circle" alt="user" />
                    </Link>
                    <div className="iq-sub-dropdown iq-user-dropdown">
                        <div className="iq-card shadow-none m-0">
                            <div className="iq-card-body p-0 pl-3 pr-3">
                                <Link to="/" className="iq-sub-card setting-dropdown">
                                    <div className="media align-items-center">
                                        <div className="right-icon">
                                            <i className="ri-file-user-line text-primary"></i>
                                        </div>
                                        <div className="media-body ml-3 rtl pr-2">
                                            <h6 className="mb-0 ">مدیریت پروفایل</h6>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="iq-sub-card setting-dropdown">
                                    <div className="media align-items-center">
                                        <div className="right-icon">
                                            <i className="ri-settings-4-line text-primary"></i>
                                        </div>
                                        <div className="media-body ml-3 rtl pr-2 ">
                                            <h6 className="mb-0 ">خروج از حساب</h6>
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
        </Fragment>
     );
}
 
export default ProfileIcon;