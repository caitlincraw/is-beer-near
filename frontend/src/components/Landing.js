import React from 'react';
import BlockQuote from './BlockQuote';
import './styles/Landing.css'

const Landing = () => {
    return (
        <div className="landing-container">
            <BlockQuote />
            <p className="narrative">Hey Dad! Use this site to search for cool NA beers. Happy Crimus!</p>
        </div>
    )
}

export default Landing;