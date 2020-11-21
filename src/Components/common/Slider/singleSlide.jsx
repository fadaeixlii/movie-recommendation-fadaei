import React from 'react'
import { Link } from 'react-router-dom';

const SingleSlide = (props) => {
    return (
        <div >
            <Link to={props.id}>
                <div className="shows-img">
                    <img src={props.imgURL} className="w-100" alt="" />
                    <div className="shows-content">
                        <h4 className="text-white mb-1">{props.name}</h4>
                        <div className="movie-time d-flex align-items-center">
                            <div className="badge badge-secondary p-1 mr-2">{props.releaseDate}</div>
                            <span className="text-white">{props.genre}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SingleSlide;