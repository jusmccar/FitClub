import React from "react";
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
    return (
        <div className="plans">
            <div className="blur plans-blur-left"></div>
            <div className="blur plans-blur-right"></div>
            <div className="programs-header plans-header">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>
            <div className="plans-card">
                {plansData.map((plan, i) => (
                    <div className="plan-card">
                        <div className="plan-icon">{plan.icon}</div>
                        <span className="plan-name">{plan.name}</span>
                        <span className="plan-price">${plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="see-more">
                            <div>
                                <span>{"See more benefits ->"}</span>
                            </div>
                            <button className="btn">Join now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;