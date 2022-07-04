import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="footer-images">
            <div className="footer-socials">
                <img src={GitHub} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer;