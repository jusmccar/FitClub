import React from "react";
import {Link} from "react-scroll";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />

            <ul className="header-menu">
                <li><Link to="header" spy={true} smooth={true}>
                    Home
                </Link></li>
                <li><Link to="programs" spy={false} smooth={true}>
                    Programs
                </Link></li>
                <li><Link to="reasons" spy={true} smooth={true}>
                    About Us
                </Link></li>
                <li><Link to="plans" spy={true} smooth={true}>
                    Plans
                </Link></li>
                <li><Link to="testimonials" spy={true} smooth={true}>
                    Testimonials
                </Link></li>
            </ul>
        </div>
    );
};

export default Header;