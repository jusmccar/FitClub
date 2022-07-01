import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <Header/>
                <div className="best-ad">
                    <div></div>
                    <span>the best fitness club in town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span>shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                </div>
            </div>
            <div className="hero-right">

            </div>
        </div>
    );
};

export default Hero;