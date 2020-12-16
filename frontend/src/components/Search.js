import React, { useState } from 'react';
import './styles/Search.css';
import BeerCard from './BeerCard';
import { connect } from 'react-redux';

const Search = (store) => {

    const [beerType, setBeerType] = useState("All Beers");
    const [beerId, setBeerId] = useState("");

    const handleClick = (e) => {
        setBeerType(e.target.value);
    }

    // need to connect this to redux store by calling the put route in redux and then merging the response from the route (which is the beer with the new rating) back into the store
    const handleRatingClick = (id) => {
        setBeerId(id);
        alert("You are trying to click a rating button");
    }

    const filterRender = () => {
        let beersInStore = store.beerStore.beers;
        if (!beersInStore.length) {
            return "There are no beers available at this time... Sorry!";
        }
        else if (beerType === "All Beers") {
            return beersInStore.map(beer => <BeerCard key={beer.id} name={beer.name} type={beer.type} image={beer.labelPic} info={beer.info} breweryName={beer.Brewery.name} breweryURL={beer.Brewery.website} onclick={() => handleRatingClick(beer.id)} />);
        } else {
            const filteredBeers = beersInStore.filter(beer => beer.type === beerType);
            return (filteredBeers.length > 0) ? filteredBeers.map(beer => <BeerCard key={beer.id} name={beer.name} type={beer.type} image={beer.labelPic} info={beer.info} breweryName={beer.Brewery.name} breweryURL={beer.Brewery.website} onclick={() => handleRatingClick(beer.id)} />) : `There are no ${beerType} beers at the moment... Booooooooo.`;
        }
    }

    return (
        <div className="search-page">
            <div className="search-title">Search for Beers</div>
            <div className="search-options">
                <input type="button" className="search-btn" value="All Beers" onClick={handleClick} />
                <input type="button" className="search-btn" value="IPA" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Stout" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Amber" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Lager" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Wheat" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Blonde" onClick={handleClick}/>
                <input type="button" className="search-btn" value="Pale Ale" onClick={handleClick}/>
            </div>
            <div className="cards-container">
                {filterRender()}            
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    beerStore: state.beers,
})

export default connect(mapStateToProps)(Search);