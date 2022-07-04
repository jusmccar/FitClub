import React, {useState} from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialsLen = testimonialsData.length;
    const transition = {type: "spring", duration: 3};

    return (
        <div className="testimonials">
            <div className="testimonials-left">
                <span className="testimonials-header">Testimonials</span>
                <span className="stroke-text testimonials-header2">What they</span>
                <span className="testimonials-header2">say about us</span>
                <motion.span
                    key={selected}
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={transition}
                    className="testimonials-review">
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span className="testimonials-name">
                        {testimonialsData[selected].name}
                    </span>
                    {" - "}
                    <span className="testimonials-status">
                        {testimonialsData[selected].status}
                    </span>
                </span>
            </div>
            <div className="testimonials-right">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => (
                            selected === 0
                                ? setSelected(testimonialsLen - 1)
                                : setSelected((prev) => prev - 1)
                        )}
                        src={leftArrow}
                        alt=""
                    />
                    <img
                        onClick={() => (
                            selected === testimonialsLen - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        )}
                        src={rightArrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;