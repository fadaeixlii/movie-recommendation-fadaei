import React from 'react'
import { Link } from 'react-router-dom';

const Genres = () => {
    return (    
        <div className="dropdown genres-box float-left ">
        <button className="btn btn-secondary  rtl  btn-sm " type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            ژانر ها<i className="fa fa-angle-down mx-1"></i>
        </button>
        <div className="dropdown-menu three-column rtl" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/">اکشن </Link>
            <Link className="dropdown-item" to="/">ماجراجویی </Link>
            <Link className="dropdown-item" to="/">کمدی </Link>
            <Link className="dropdown-item" to="/">جنایی و گانگستری</Link>
            <Link className="dropdown-item" to="/">درام </Link>
            <Link className="dropdown-item" to="/">حماسی و تاریخی</Link>
            <Link className="dropdown-item" to="/">وحشت</Link>
            <Link className="dropdown-item" to="/">موزیکال </Link>
            <Link className="dropdown-item" to="/">علمی تخیلی</Link>
            <Link className="dropdown-item" to="/">جنگی و ضد جنگ</Link>
            <Link className="dropdown-item" to="/">وسترن </Link>
            <Link className="dropdown-item" to="/">زندگی نامه</Link>
            <Link className="dropdown-item" to="/">عاشقانه</Link>
            <Link className="dropdown-item" to="/">کاراگاهی و رازآلود</Link>
            <Link className="dropdown-item" to="/">واقعه ای</Link>
            <Link className="dropdown-item" to="/">فانتزی </Link>
            <Link className="dropdown-item" to="/">نوآر </Link>
            <Link className="dropdown-item" to="/">غم انگیز</Link>
            <Link className="dropdown-item" to="/">ورزشی </Link>
            <Link className="dropdown-item" to="/">ماورالطبیعه</Link>
            <Link className="dropdown-item" to="/">ابرقهرمانی</Link>
            <Link className="dropdown-item" to="/">تریلر/روایتی</Link>
            <Link className="dropdown-item" to="/">زامبی </Link>
            <Link className="dropdown-item" to="/">انیمیشن </Link>
            <Link className="dropdown-item" to="/">انیمه </Link>
            <Link className="dropdown-item" to="/">کودکانه/خانوادگی</Link>
            <Link className="dropdown-item" to="/">کلاسیک </Link>
            <Link className="dropdown-item" to="/">کالت </Link>
            <Link className="dropdown-item" to="/">مستند </Link>
            <Link className="dropdown-item" to="/">صامت </Link>
            

        </div>
    </div>
     );
}
 
export default Genres;