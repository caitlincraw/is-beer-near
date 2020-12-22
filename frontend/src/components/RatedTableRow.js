import React from 'react';
import './styles/RatedTableRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const RatedTableRow = (props) => {
    return (
        <tr key={props.id}>
            <th scope="row" className="align-middle"><img src={props.image} alt="Beer label" style={{width: "3rem"}}></img></th>
            <td className="align-middle">{props.name}</td>
            <td className="align-middle">{props.type}</td>
            <td className="align-middle"><a href={props.breweryURL} target="_blank" rel="noreferrer">{props.breweryName}</a></td>
            <td className="align-middle"><button className="trash-btn" onClick={props.handleClick}><FontAwesomeIcon className="icon" icon={faTrash} /></button></td>
        </tr>
    )
}

export default RatedTableRow;