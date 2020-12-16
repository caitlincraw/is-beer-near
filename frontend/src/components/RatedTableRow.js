import React from 'react';
import './styles/RatedTableRow.css';


const RatedTableRow = (props) => {
    return (
        <tr key={props.id}>
            <th scope="row"><img src={props.image} style={{width: "3rem"}}></img></th>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td><a href={props.breweryURL} target="_blank">{props.breweryName}</a></td>
        </tr>
    )
}

export default RatedTableRow;