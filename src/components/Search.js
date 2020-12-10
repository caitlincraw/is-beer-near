import React from 'react';
import './styles/Search.css';
import {Link} from 'react-router-dom';

const Search = () => {
    return (
        <div className="search-page">
            <div className="search-title">Search for Beers</div>
            <div className="search-options">
                <Link exact to="/search/allbeers" className="search-link">All Beers</Link>
                <Link exact to="/search/ipa" className="search-link">IPA</Link>
                <Link exact to="/lists/stout" className="search-link">Stout</Link>
                <Link exact to="/lists/lager" className="search-link">Lager</Link>
                <Link exact to="/lists/pale" className="search-link">Pale Ale</Link>
            </div>
        </div>
    )
}

export default Search;