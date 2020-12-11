import React from 'react';
import './styles/Search.css';
import BeerCard from './BeerCard';

const Search = () => {
    return (
        <div className="search-page">
            <div className="search-title">Search for Beers</div>
            <div className="search-options">
                <button className="search-btn">All Beers</button>
                <button className="search-btn">IPA</button>
                <button className="search-btn">Stout</button>
                <button className="search-btn">Lager</button>
                <button className="search-btn">Pale Ale</button>
            </div>
            <div className="cards-container">
                <BeerCard />
                <BeerCard />
                <BeerCard />
                <BeerCard />
            </div>
        </div>
    )
}

export default Search;