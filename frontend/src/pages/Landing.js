import React from 'react';
import { Link } from 'react-router-dom'; 
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing_h">
            <h1>Salon Fuchsia</h1>
            <p>First of all you're really pretty</p>
            <Link to="./Home">
                <button className="landing-button">Explore</button>
            </Link>
        </div>
    );
};

export default Landing;
