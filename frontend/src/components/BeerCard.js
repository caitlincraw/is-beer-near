import React from 'react';
import './styles/BeerCard.css';

const BeerCard = (props) => {

        return (
            <div className="card" style={{"width": "18rem"}} key={props.id}>
                <img className="card-img-top beer-label" src={props.image} alt="Card image cap" height="125rem"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.type}</h6>
                    <a href={props.breweryURL} target="_blank" rel="noreferrer">{props.breweryName}</a>
                    <p className="card-text">{props.info}</p>
                    <div className="card-btns">
                        <button className="card-btn">😄</button>
                        <button className="card-btn">🤩</button>
                        <button className="card-btn">🤮</button>
                    </div>
                </div>
            </div>

        )
}

export default BeerCard;