import React from 'react';
import './styles/RatedTable.css';

const RatedTable = (props) => {

        return (
            <div className="table-container">
                <div className="table-title">🍺 Favorite Beers 😄</div>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
}

export default RatedTable;