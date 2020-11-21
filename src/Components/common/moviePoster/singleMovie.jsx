import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SingleMovie = () => {
  return (
    <Fragment>
      <section
        className="banner-wrapper overlay-wrapper iq-main-slider rtl"
        style={{
          backgroundImage: "url(../images/movie/1.jpg)",
        }}
      >
        <div className="banner-caption">
            
          <ul className="list-inline p-0 m-0 share-icons music-play-lists">
            <li>
              <span>
                <i className="ri-heart-fill"></i>
              </span>
            </li>
            <li className="share">
              <span>
                <i className="ri-share-fill"></i>
              </span>
              <div className="share-box">
                <div className="d-flex align-items-center">
                  <Link href="#" className="share-ico">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                  <Link href="#" className="share-ico">
                    <i className="ri-twitter-fill"></i>
                  </Link>
                  <Link href="#" className="share-ico">
                    <i className="ri-links-fill"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="main-content rtl">
        <section className="movie-detail container-fluid rtl">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-info g-border">
                <h1 className="trending-text big-title text-uppercase mt-0">
                  John Wick: Chapter 3 – Parabellum
                </h1>
                <ul className="p-0  d-flex align-items-center movie-content rtl">
                  <li className="text-white mx-2" style={{listStyle:"none"}}>Action</li>
                  <li className="text-white mx-2" style={{listStyle:"none"}}>Thriller </li>
                </ul>
                <div className="d-flex align-items-center text-white text-detail rtl">
                  <span className="badge badge-secondary p-3 mx-2" style={{listStyle:"none"}}>18+</span>
                  <span className="trending-year mx-2" style={{listStyle:"none"}}>2019</span>
                </div>

                <p className="trending-dec w-100 mb-0">
                  جان ویک به یک فراری بزرگ تبدیل شده است و همکاران سابق او به
                  دنبال شکارش هستند. او می‎بایست هر طوری که شده است از این مهلکه
                  جان سالم به در ببرد و…
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SingleMovie;
