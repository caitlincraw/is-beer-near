import React from 'react';
import './styles/BeerCard.css';
import ReactTooltip from "react-tooltip";

const BeerCard = (props) => {

        return (
            <div className="card" style={{"width": "18rem"}} key={props.id}>
                <img className="card-img-top beer-label" src={props.image} alt="Beer label" height="125rem"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.type}</h6>
                    <a href={props.breweryURL} target="_blank" rel="noreferrer">{props.breweryName}</a>
                    <p className="card-text">{props.info}</p>
                    <div className="card-btns">
                        <button className="card-btn" value="favorite" onClick={props.onclick} data-tip data-for="favTip">
                            🤩                            
                        </button>
                        <ReactTooltip id="favTip" place="top" effect="solid" backgroundColor='#ce8b10'>
                            Add to your favorite list!
                        </ReactTooltip>
                        <button className="card-btn" value="needtotry" onClick={props.onclick} data-tip data-for="tryTip">
                            🤔
                        </button>
                        <ReactTooltip id="tryTip" place="top" effect="solid" backgroundColor='#ce8b10'>
                                Add to your need to try list!
                        </ReactTooltip>
                        <button className="card-btn" value="nasty" onClick={props.onclick} data-tip data-for="nastyTip">
                            🤮
                        </button>
                        <ReactTooltip id="nastyTip" place="top" effect="solid" backgroundColor='#ce8b10'>
                                Add to your nasty list!
                        </ReactTooltip>
                    </div>
                </div>
            </div>

        )
}

export default BeerCard;