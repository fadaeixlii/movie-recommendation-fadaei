import React from 'react'
import { Link } from 'react-router-dom';

const NewSinglePost = (props) => {
    return (
        <div className="single_stuff wow fadeInDown col-10 col-md-5 rtl">
            <div className="single_stuff_img "> <Link to="/news/singleNews"><img src={props.imgURL} alt="" /></Link> </div>
            <div className="single_stuff_article">
                <div className="single_sarticle_inner"> <Link className="stuff_category" to="#">{props.category}</Link>
                    <div className="stuff_article_inner"> <span className="stuff_date">{props.month} <strong>{props.day}</strong></span>
                        <h2><Link to="/news/singleNews">{props.title}</Link></h2>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSinglePost;