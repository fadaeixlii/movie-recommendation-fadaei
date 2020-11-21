import React from 'react'
import { Link } from 'react-router-dom';

const SingleMoviePoster = (props) => {
    return (
        <li className="slide-item col-lg-12 col-sm-6 col-xl-3" style={{listStyle:"none"}}>
            <Link 
            // to={props.id}
            to="/singleMovie"
            >
                <div className="block-images position-relative">
                    <div className="img-box">
                        <img src={props.imgURL} className="img-fluid" alt="" />
                    </div>
                    <div className="block-description">
                        <h6>{props.name}</h6>
                        <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">{props.releaseDate}</div>
                            <span className="text-white">{props.genre}</span>
                        </div>
                        <div className="hover-buttons">
                            <span className="btn btn-hover">
                                <i className="fa fa-eye mr-1" aria-hidden="true"></i>
                                          see details
                            </span>
                        </div>
                    </div>
                    <div className="block-social-info">
                        <ul className="list-inline p-0 m-0 music-play-lists">
                            <li><span><i className="ri-heart-fill"></i></span></li>
                            <li><span><i className="ri-add-line"></i></span></li>
                        </ul>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default SingleMoviePoster;