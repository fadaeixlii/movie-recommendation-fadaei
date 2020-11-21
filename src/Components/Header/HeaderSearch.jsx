import React from "react";
import Genres from "../layouts/Header Component/genres";

const HeaderSearch = () => {
    return (
        <React.Fragment>
            <div className="s01">
                <form>
                    <fieldset className="rtl">
                        <legend className="rlt mb-3 shadow1">فیلم چی دوس داری؟</legend>
                        <h4 className="rtl mb-2 shadow2">اسمشو بنویس اینجا مثل شو پیدا کنی!</h4>
                    </fieldset>
                    <div className="inner-form">
                        <div className="input-field first-wrap">
                            <input className="rtl" id="search" type="text" placeholder="چی دوست داری ببینی ؟" />
                        </div>
                        <div className="input-field third-wrap">
                            <Genres />
                        </div>
                        <div className="input-field third-wrap">
                            <button className="btn-search" type="button">جستجو</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default HeaderSearch;