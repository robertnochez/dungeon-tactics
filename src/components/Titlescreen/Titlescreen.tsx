import React from "react";
import './Titlescreen.css';
import { useNavigate } from "react-router-dom";

const handleArrowClick = () => {
    const moveSections = document.getElementById("section-what-we-do");
    if (moveSections) {
      moveSections.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth" 
      });
  };

const Page = () => {

    const navigate = useNavigate(); 

    return (
        <div>
            <div className="sticky-bar-top-home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ height: '30px', width: '30px'}} onClick={handleHomeClick}>
                    <path d="M3 9l9-7 9 7v11H3V9z" /> 
                    <path d="M9 21V12h6v9" />
                </svg>
            </div>
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
                <button className="button" onClick={() => navigate("/Character-Customizer")}>
                    Get started!
                </button>
            </div>
            <div className="text-container">
                <div className="down-arrow" onClick={handleArrowClick}>
                ↓
                </div>
            </div>
            </section>

            <section id="section-what-we-do" className="section section-what-we-do">
                <div className="vignette"></div>
                <div className="right-column"></div>
                <div className="left-column">
                    <h1>Test new characters easily!</h1>
                    <div className="circle-container">
                        <div className="circle-text">
                            <div className="circle">1</div>
                            <h2>Choose your class</h2>
                        </div>
                    </div>
                    <div className="circle-container">
                        <div className="circle-text">
                            <div className="circle">2</div>
                            <h2>Customize your stats</h2>
                        </div>
                    </div>
                    <div className="circle-container">
                        <div className="circle-text">
                            <div className="circle">3</div>
                            <h2>Simulate battles against enemies</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Page;

