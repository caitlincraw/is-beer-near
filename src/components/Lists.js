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
                <Link exact to="/lists/favoritebeer" className="list-link active">Favorite Beers</Link>
                <Link exact to="/lists/totrybeer" className="list-link">Beers to Try Next</Link>
                <Link exact to="/lists/neverdrinkagainbeer" className="list-link">Beers to Never Drink Again</Link>
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