import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const NotifIcon = () => {
    return (
        <Fragment>
            <Link to="#" className="search-toggle" data-toggle="search-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
                    className="noti-svg">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                </svg>
                <span className="bg-danger dots"></span>
            </Link>
            <div className="iq-sub-dropdown">
                <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body rtl">
                        <Link to="#" className="iq-sub-card">
                            <div className="media align-items-center rtl">
                                <img src="images/notify/thumb-1.jpg" className="img-fluid mr-3"
                                    alt="streamit" />
                                <div className="media-body">
                                    <h6 className="mb-0 ">john wick 4</h6>
                                    <small className="font-size-12"> اکران شد</small>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="iq-sub-card">
                            <div className="media align-items-center rtl">
                                <img src="images/notify/thumb-2.jpg" className="img-fluid mr-3"
                                    alt="streamit" />
                                <div className="media-body">
                                    <h6 className="mb-0 ">The Last Breath</h6>
                                    <small className="font-size-12">کیفیت خوب رسید</small>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="iq-sub-card">
                            <div className="media align-items-center rtl">
                                <img src="images/notify/thumb-3.jpg" className="img-fluid mr-3"
                                    alt="streamit" />
                                <div className="media-body">
                                    <h6 className="mb-0 ">no time to die</h6>
                                    <small className="font-size-12">عقب افتاد!</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NotifIcon;