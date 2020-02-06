import React from "react";
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({title}){
    
    return( <div  className="listItem">
                <span>{title}</span>
                <div className="iconContiner">
                    <button className="icon" id="trash"><FontAwesomeIcon icon={faTrash} /></button>
                    <button className="icon" id="exclamation"><FontAwesomeIcon icon={faExclamation} /></button>
                </div>
            </div>
    );
}