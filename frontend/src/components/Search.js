import React, { useState } from 'react';
import './styles/Search.css';
import BeerCard from './BeerCard';
import { connect, useDispatch } from 'react-redux';
import { updateBeer } from '../redux/actions';

const Search = (store) => {

    const [beerType, setBeerType] = useState("All Beers");
    const [beerId, setBeerId] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        setBeerType(e.target.value);
    }

    const handleRatingClick = (id,e) => {
        const rating = e.target.value;
        console.log(`id before dispatch ${id}`);
        console.log(`rating before dispatch ${rating}`);
        // call action here with id and rating
        dispatch(updateBeer(id, rating));
        console.log(`id after dispatch ${id}`)
        console.log(`rating after dispatch ${rating}`)
        // alert(`You are trying to rate a beer`);
    }

    const filterRender = () => {
        let beersInStore = store.beerStore.beers;
        if (!beersInStore.length) {
            return "There are no beers available at this time... Sorry!";
        }
        else if (beerType === "All Beers") {
            return beersInStore.map(beer => <BeerCard key={beer.id} name={beer.name} type={beer.type} image={beer.labelPic} info={beer.info} breweryName={beer.Brewery.name} breweryURL={beer.Brewery.website} onclick={(e) => handleRatingClick(beer.id, e)} />);
        } else {
            const filteredBeers = beersInStore.filter(beer => beer.type === beerType);
            return (filteredBeers.length > 0) ? filteredBeers.map(beer => <BeerCard key={beer.id} name={beer.name} type={beer.type} image={beer.labelPic} info={beer.info} breweryName={beer.Brewery.name} breweryURL={beer.Brewery.website} onclick={(e) => handleRatingClick(beer.id, e)} />) : `There are no ${beerType} beers at the moment... Booooooooo.`;
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