import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SingleNews = () => {
  return (
    <div classNameName="row justify-content-center  ">
      <div classNameName="singlepost_content rtl  col-10">
        {" "}
        <Link to="#" classNameNameName="stuff_category">
          Technology
        </Link>{" "}
        <span classNameName="stuff_date">
          Nov <strong>17</strong>
        </span>
        <h2>
          <Link to="#">Duis quis erat non nunc fringilla</Link>
        </h2>
        <img
          classNameName="img-center"
          src="/images/new/stuff_img1.jpg"
          alt=""
        />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{" "}
        </p>
        <blockquote>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </blockquote>
        <div classNameName="social_area wow fadeInLeft">
          <ul>
            <li>
              <Link to="#">
                <span classNameName="fa fa-facebook"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span classNameName="fa fa-twitter"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span classNameName="fa fa-google-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span classNameName="fa fa-linkedin"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span classNameName="fa fa-pinterest"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div classNameName="author">
          {" "}
          <Link to="#">
            <img src="../images/100x100.jpg" alt="" />
          </Link>
          <div classNameName="author_details">
            <h3>
              <Link to="#">Author Name</Link>
            </h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default SingleNews;

const SinglePost2 = () => {
  return (
    <Fragment>
      <section
        className="banner-wrapper overlay-wrapper iq-main-slider rtl"
        style={{
          backgroundImage: "url(../images/shows-banner/single-show.jpg)",
        }}
      >
        <div className="banner-caption">
          <ul className="list-inline p-0 m-0 share-icons music-play-lists">
            <li className="share">
              <span>
                <i className="ri-share-fill"></i>
              </span>
              <div className="share-box">
                <div className="d-flex align-items-center">
                  <Link to="#" className="share-ico">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                  <Link to="#" className="share-ico">
                    <i className="ri-twitter-fill"></i>
                  </Link>
                  <Link to="#" className="share-ico">
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
                  یک نمونه خبر
                </h1>
                <hr/>
                <ul className="p-0 list-inline d-flex align-items-center movie-content">
                  <li className="text-white" style={{ listStyle: "none" }}>
                    10
                  </li>
                  <li className="text-white" style={{ listStyle: "none" }}>
                    آبان
                  </li>
                </ul>

                <div className="d-flex align-items-center series mb-4">
                  <Link to="javascript:void();">
                    <img
                      src="images/trending/trending-label.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                  <span className="text-gold ml-3">سینما هالیوود</span>
                </div>
                <p className="trending-dec w-100 mb-0">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                  زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                  متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                  طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                  فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                  دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                  وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SinglePost2;
