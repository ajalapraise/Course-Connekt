import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'



const NavBar = () => {
    const location = useLocation();
    const isLinkActive = (linkPath) => {
        console.log(location.pathname === linkPath);
        // Check if the current location path matches the linkPath
        return location.pathname === linkPath;
    };
    return (

        <div className='nav-cont'>
            <div className="nav-main-cont">
                <div className='nav-logo'>
                    <Link to='./' >
                        <h1>COURSE <br />CONNEKT.</h1>
                    </Link>
                </div>
                <div className='navs'>
                    <Link to='/' className={isLinkActive("/") ? "active" : ""} >
                        Home
                    </Link>
                    <Link to='/faq' className={isLinkActive("/faq") ? "active" : ""}>
                        FAQs
                    </Link>
                    <Link to='/aboutUs' className={isLinkActive("/aboutUs") ? "active" : ""}>
                        About Us
                    </Link>
                    <Link to='/courses' className={isLinkActive("/courses") ? "active" : ""}>
                        Courses
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default NavBar;
