import React from "react";
import testimonialsData from "../Data/Journey";
import "../Styles/Journey.css";

const Testimonials = () => {
    return (
        <div className="page">
            <div className="testimonials-container">
                {testimonialsData.map((item, index) => (
                    <div key={index} className={`card ${item.type === "testimonial" ? "testimonial-card" : "stat-card"}`}>
                        {item.type === "testimonial" ? (
                            <>
                                <div className="rating">★★★★★</div>
                                <p>"{item.text}"</p>
                                <div className="author">{item.author}</div>
                                <div className="company">{item.company}</div>
                            </>
                        ) : (
                            <>
                                <div className="value">{item.value}</div>
                                <div className="label">{item.label}</div>
                                {item.role && <div className="company">{item.role}</div>}
                                {item.subtext && <div className="company">{item.subtext}</div>}
                                <div className="company">{item.company}</div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
