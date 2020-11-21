import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MidNavBar2 from "./nav/MidNavBar";
import MobileRightIcons from "./nav/mobileNavBar/MobileRightIcons";
import RightNavBar from "./nav/RightNavBar.jsx";

const Header = () => {
  return (
    <Fragment>
      <header id="main-header">
        <div className="main-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  {/* <Link to="/" className="navbar-toggler c-toggler" >
                                        <div className="navbar-toggler-icon" data-toggle="collapse">
                                            <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                                            <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                                            <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                                        </div>
                                    </Link> */}
                  <MobileRightIcons />
                  <Link className="navbar-brand" href="index-2.html">
                    {" "}
                    <img
                      className="img-fluid logo"
                      src="/images/Logo/mainLogoCompress.png"
                      alt="streamit"
                    />{" "}
                  </Link>

                  <MidNavBar2 />
                  {/* <MidNavBar/> */}

                  <RightNavBar />
                </nav>
                <div className="nav-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
