import React from 'react';
import './styles/Landing.css'
import dadPic from './images/dad2.png'
import dadText from './images/dad-text.png'
import dadQuote from './images/beerisneartext2.svg'

const Landing = () => {
    return (
        <div className="landing-container">
            <img className="landing-picture" src={dadPic} alt="Matt Crawford circa 1980"></img>
            <img className="landing-quote" src={dadQuote} alt="Quote of I like beer when beer is near"></img>
        </div>
    )
}

export default Landing;