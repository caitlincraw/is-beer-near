import React from 'react';
import './styles/BeerCard.css';

const BeerCard = (props) => {

        return (
            <div className="card" style={{"width": "18rem"}} key={props.id}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.type}</h6>
                    <a href="https://www.budweiser.com/" target="_blank" rel="noreferrer">Brewery Site</a>
                    <p className="card-text">{props.info}</p>
                    <button className="card-link">Yum</button>
                    <button className="card-link">TBD</button>
                    <button className="card-link">Nasty</button>
                </div>
            </div>

        )
}

export default BeerCard;