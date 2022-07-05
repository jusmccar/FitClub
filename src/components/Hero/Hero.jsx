import React from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from "framer-motion";

const Hero = () => {
    const transition = {type: "spring", duration: 3};

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="hero-left">
                <Header/>
                <div className="best-ad">
                    <motion.div
                        initial={{left: "203px"}}
                        whileInView={{left: "8px"}}
                        transition={{...transition, type: "tween"}}
                    ></motion.div>
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
                        <span>
                            <CountUp start={200} end={240} duration={3} prefix="+"/>
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <CountUp start={900} end={999} duration={3} prefix="+"/>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <CountUp start={50} end={69} duration={3} prefix="+"/>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="hero-right">
                <button className="btn"><Link to="join" spy={true} smooth={true}>
                    Join Now
                </Link></button>
                <motion.div
                    initial={{right: "1rem"}}
                    whileInView={{right: "4rem"}}
                    transition={transition}
                    className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>115 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{right: "11rem"}}
                    whileInView={{right: "20rem"}}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />
                <motion.div
                    initial={{right: "32rem"}}
                    whileInView={{right: "28rem"}}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;