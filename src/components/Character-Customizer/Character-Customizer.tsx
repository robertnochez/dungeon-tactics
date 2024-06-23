import React from "react";
import './Character-Customizer.css';
import { useNavigate } from "react-router-dom";

const Page = () => {

    const navigate = useNavigate(); 

    return (
        <div>
            <div className="sticky-bar-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ height: '30px', width: '30px'}} onClick={() => navigate(-1)}>
                    <path d="M3 9l9-7 9 7v11H3V9z" /> 
                    <path d="M9 21V12h6v9" />
                </svg>
            </div>
            <section id="section-top" className="section section top">
                <div className="text-cont">
                    <h1>Character Creation</h1>
                 </div>
            </section>
             <section id="section-character" className="section section-character">
                <div className="vignette"></div>
                <div className="text-cont">
                    <h2>1. Choose your character</h2>
                </div>
                <div className="image-row">
                    <div className="image-cont">
                        <img src="/assets/dt-fighter.png" alt="DT Fighter" style={{ height: '300px', width: '300px' }}/>
                            <h1>Male human fighter</h1>
                    </div>
                    <div className="image-cont">
                        <img src="/assets/dt-fighter.png" alt="DT Fighter" style={{ height: '300px', width: '300px' }}/>
                            <h1>Female human fighter</h1>
                    </div>
                </div>
                <div className="text-cont">
                    <h2>2. Choose your stats</h2>
                </div>
            </section>
        </div>
    );
}
export default Page;