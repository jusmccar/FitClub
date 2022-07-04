import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testimonialsLen = testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="testimonials-left">
                <span className="testimonials-header">Testimonials</span>
                <span className="stroke-text testimonials-header2">What they</span>
                <span className="testimonials-header2">say about us</span>
                <span className="testimonials-review">
                    {testimonialsData[selected].review}
                </span>
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
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
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