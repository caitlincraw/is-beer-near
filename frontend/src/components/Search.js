import React, { useState } from 'react';
import './styles/Search.css';
import BeerCard from './BeerCard';
import { connect, useDispatch } from 'react-redux';
import { updateBeer } from '../redux/actions';
import { Link } from 'react-router-dom';

const Search = (store) => {

    const [beerType, setBeerType] = useState("All Beers");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        setBeerType(e.target.value);
    }

    const handleRatingClick = (id,e) => {
        const rating = e.target.value;

        // calls action with id and rating
        dispatch(updateBeer(id, rating));

        // need to add something here that notifies user which list the beer was added to
        alert(`Beer Added!`);
    }

    const filterRender = () => {
        let beersInStore = store.beerStore.beers;
        if (!beersInStore.length) {
            return <p className="no-beers">I'm sorry but there are no beers available at this time... Go back to <Link to="/" className="error-nav-link">the home page</Link> and hope that beers will surface soon.</p>;
        }
        if (beerType === "All Beers") {
            return beersInStore.map(beer => (
                <BeerCard 
                    key={beer.id} 
                    name={beer.name} 
                    type={beer.type} 
                    image={beer.labelPic} 
                    info={beer.info} 
                    breweryName={beer.Brewery.name} 
                    breweryURL={beer.Brewery.website} 
                    onclick={(e) => handleRatingClick(beer.id, e)} 
                />
            ));
        } 
        const filteredBeers = beersInStore.filter(beer => beer.type === beerType);
        return (filteredBeers.length > 0) ? filteredBeers.map(beer => (
            <BeerCard 
                key={beer.id} 
                name={beer.name} 
                type={beer.type} 
                image={beer.labelPic} 
                info={beer.info} 
                breweryName={beer.Brewery.name} 
                breweryURL={beer.Brewery.website} 
                onclick={(e) => handleRatingClick(beer.id, e)} 
            />
        )) : <p className="no-beers">There are no {beerType} beers at the moment... Booooooooo.</p>;
    }

    const searchOptions = ["All Beers", "IPA", "Stout", "Amber", "Lager", "Wheat", "Pale Ale"]
    return (
        <div className="search-page">
            <div className="search-title">Search for NA Beers</div>
            <div className="search-options">
                {searchOptions.map((option, index) => <input key={index} type="button" className="search-btn" value={option} onClick={handleClick} />)}
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