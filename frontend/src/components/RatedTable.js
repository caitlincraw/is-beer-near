import React from 'react';
import RatedTableRow from './RatedTableRow';
import './styles/RatedTable.css';

const RatedTable = (props) => {

        return (
            <div className="table-container">
                <div className="table-title">🍺 {props.rating} BEERS 🍺</div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Beer Icon</th>
                            <th scope="col">Beer Name</th>
                            <th scope="col">Beer Type</th>
                            <th scope="col">Brewery</th>
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
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        )
}

export default RatedTable;