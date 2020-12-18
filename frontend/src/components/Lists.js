import React, {useState} from 'react';
import './styles/Lists.css';
import RatedTable from './RatedTable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Lists = (store) => {

    const [ratingList, setRatingList] = useState("favorite");

    const handleClick = (rating) => {
        setRatingList(rating);
    }

    const filterRender = () => {
        let beersInStore = store.beerStore.beers;
        
        if (!beersInStore.length) {
            return <p className="no-beers">I'm sorry but there are no beers available at this time... Go back to <Link to="/" className="error-nav-link">the home page</Link> and hope that beers will surface soon.</p>;
        }

        const filteredBeers = beersInStore.filter(beer => beer.ratingList === ratingList);  
        return (filteredBeers.length > 0) ? <RatedTable beerList={filteredBeers} rating={ratingList.toUpperCase()} /> : <p className="no-beers"> You do not have any beers in your {ratingList} list. Go back to <Link to="/search" className="error-nav-link">the search page</Link> to add some brews!! </p>;
    }

    return (
        <div className="lists-container">
            <div className="lists-title">Matt's Lists</div>
            <div className="lists-options">
                <input type="button" className="list-link" value="Favorite Beers" onClick={() => handleClick("favorite")} />
                <input type="button" className="list-link" value="Need to Try Beers" onClick={() => handleClick("needtotry")}/>
                <input type="button" className="list-link" value="Nasty Beers" onClick={() => handleClick("nasty")}/>
            </div>
            <div className="beer-list">
                {filterRender()}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    beerStore: state.beers,
})

export default connect(mapStateToProps)(Lists);

// export default Lists;