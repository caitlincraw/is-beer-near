import React, { useEffect } from 'react';
import './styles/Search.css';
import BeerCard from './BeerCard';
import { connect } from 'react-redux';

const Search = (store) => {

    return (
        <div className="search-page">
            <div className="search-title">Search for Beers</div>
            <div className="search-options">
                <button className="search-btn">All Beers</button>
                <button className="search-btn">IPA</button>
                <button className="search-btn">Stout</button>
                <button className="search-btn">Amber</button>
                <button className="search-btn">Lager</button>
                <button className="search-btn">Wheat</button>
                <button className="search-btn">Blonde</button>
                <button className="search-btn">Pale Ale</button>
            </div>
            <div className="cards-container">
                {store.beerStore.beers && store.beerStore.beers.map(beer => <BeerCard id={beer.id} name={beer.name} type={beer.type} info={beer.info} />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    beerStore: state.beers,
})

export default connect(mapStateToProps)(Search);