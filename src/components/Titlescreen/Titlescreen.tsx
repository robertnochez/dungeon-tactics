import React from "react";
import './Titlescreen.css';

const handleArrowClick = () => {
    const moveSections = document.getElementById("section-what-we-do");
    if (moveSections) {
      moveSections.scrollIntoView({ behavior: "smooth" });
    }
  };

const Page = () => {
    return (
        <html>
            <div className="sticky-bar-top"></div>
            <section id="section-home">
            <div className="image-container">
                <img src="/assets/dt-logo-grey.png" alt="DT Logo" style={{ height: '300px', width: '300px' }}/>
            </div>
            <div className="text-container">
                <h1> Welcome to Dungeon Tactics </h1>
            </div>
            <div className="text-container">
                <h2> A Dungeon and Dragons Battle Simulator powered by AI. </h2>
            </div>
            <div className="container">
                <button className="button">
                    Get started!
                </button>
            </div>
            <div className="text-container">
                <div className="down-arrow" onClick={handleArrowClick}>
                ↓
                </div>
            </div>
            </section>

            <section id="section-what-we-do">
               
            </section>
        </html>
    );
};


export default Page;

