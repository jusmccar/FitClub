import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

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
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div className="hero-text-ext">
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+240</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+999</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+69</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="hero-right">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>115 bpm</span>
                </div>
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />
                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;