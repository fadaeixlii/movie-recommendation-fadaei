import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer class="mb-0">
         <div class="container-fluid">
            <div class="block-space">
               <div class="row">
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0 rtl">
                        <li><Link to="#">درباره ما</Link></li>
                        <li><Link to="movie-category.html">فیلم ها</Link></li>
                        <li><Link to="show-category.html">سریال ها</Link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0 rtl">
                        <li><Link to="#">قوانین</Link></li>
                        <li><Link to="#">شرایط و ضوابط</Link></li>
                        <li><Link to="#">درخواست کمک</Link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-4">
                     <ul class="f-link list-unstyled mb-0 rtl">
                        <li><Link to="#">سوالات متداول</Link></li>
                        <li><Link to="#">ارتباط با ما</Link></li>
                        <li><Link to="#">اطلاع قانونی</Link></li>
                     </ul>
                  </div>
                  <div class="col-lg-3 col-md-12 r-mt-15 rtl">
                     <div class="d-flex">
                        <Link to="#" class="s-icon">
                        <i class="ri-facebook-fill"></i>
                        </Link>
                        <Link to="#" class="s-icon">
                        <i class="ri-skype-fill"></i>
                        </Link>
                        <Link to="#" class="s-icon">
                        <i class="ri-linkedin-fill"></i>
                        </Link>
                        <Link to="#" class="s-icon">
                        <i class="ri-whatsapp-fill"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyright py-2">
            <div class="container-fluid">
               <p class="mb-0 text-center font-size-14 text-body">Fadaei</p>
            </div>
         </div>
      </footer>
     );
}
 
export default Footer;