import React from 'react';
import './styles/Lists.css';
import {Link, Switch, Route} from 'react-router-dom';
import FavDrinkList from './FavDrinkList';
import ToDrinkList from './ToDrinkList';
import NeverDrinkList from './NeverDrinkList';

const Lists = () => {
    return (
        <div className="lists-container">
            <div className="lists-title">Matt's Lists</div>
            <div className="lists-options">
                <Link to="/lists/favoritebeer" className="list-link">Favorite Beers</Link>
                <Link to="/lists/totrybeer" className="list-link">New Beers</Link>
                <Link to="/lists/neverdrinkagainbeer" className="list-link">Nasty Beers</Link>
            </div>
            <div className="beer-list">
                <Switch>
                    <Route exact path="/lists/favoritebeer">
                        <FavDrinkList />
                    </Route>
                    <Route exact path="/lists/totrybeer">
                        <ToDrinkList />
                    </Route>
                    <Route exact path="/lists/neverdrinkagainbeer">
                        <NeverDrinkList />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Lists;