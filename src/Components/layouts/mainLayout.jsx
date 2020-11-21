import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header Component/header';
class MainLayout extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                    <Header />
                    {this.props.children}
                    <Footer />
                    <div id="back-to-top">
                        <Link class="top" to="#top" id="top"> <i class="fa fa-angle-up"></i> </Link>
                    </div>
            </React.Fragment>
        );
    }
}

export default MainLayout;