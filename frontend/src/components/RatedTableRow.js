import React from 'react';
import './styles/RatedTableRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const RatedTableRow = (props) => {
    return (
        <tr key={props.id}>
            <th scope="row"><img src={props.image} alt="Beer label" style={{width: "3rem"}}></img></th>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td><a href={props.breweryURL} target="_blank" rel="noreferrer">{props.breweryName}</a></td>
            <td><button className="trash-btn" onClick={props.handleClick}><FontAwesomeIcon className="icon" icon={faTrash} /></button></td>
        </tr>
    )
}

export default RatedTableRow;