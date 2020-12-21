import React from 'react';
import RatedTableRow from './RatedTableRow';
import './styles/RatedTable.css';
import { updateBeer } from '../redux/actions';
import { useDispatch } from 'react-redux';

const RatedTable = (props) => {


    const dispatch = useDispatch();

    const handleTrashClick = (id) => {
        const noRating = "notrated";

        // calls action with id and rating
        dispatch(updateBeer(id, noRating));
    }

        return (
            <div className="table-container">
                <div className="table-title text-center">🍺 {props.rating} BEERS 🍺</div>
                <div className="table-responsive-lg">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Beer Icon</th>
                                <th scope="col">Beer Name</th>
                                <th scope="col">Beer Type</th>
                                <th scope="col">Brewery</th>
                                <th scope="col">Remove Beer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.beerList.map(beer => (
                                <RatedTableRow 
                                    key={beer.id}
                                    name={beer.name} 
                                    type={beer.type} 
                                    image={beer.labelPic} 
                                    breweryName={beer.Brewery.name} 
                                    breweryURL={beer.Brewery.website} 
                                    handleClick={() => handleTrashClick(beer.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        )
}

export default RatedTable;