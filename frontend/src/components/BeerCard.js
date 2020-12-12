import React from 'react';
import './styles/BeerCard.css';

const BeerCard = () => {
    return (
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Bud 0</h5>
                <h6 className="card-subtitle mb-2 text-muted">Lager</h6>
                <h6 className="card-subtitle mb-2 text-muted">Budweiser</h6>
                <a className="card-subtitle mb-2 text-muted" href="https://www.budweiser.com/" target="_blank" rel="noreferrer">Brewery Site</a>
                <p className="card-text">Budweiser Zero, an alcohol free brew with the taste of Budweiser at only 50 calories and zero grams of sugar.</p>
                <button className="card-link">Yum</button>
                <button className="card-link">TBD</button>
                <button className="card-link">Nasty</button>
            </div>
        </div>

    )
}

export default BeerCard;