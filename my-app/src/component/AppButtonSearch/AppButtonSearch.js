import React from 'react';
import './AppButtonSearch.css'

export default function AppButtonSearch(){
    return(
        <div className="btnsSearch">
            <button className="btnAll" id = "btnAll">All</button>
            <button className="btnActive" id = "btnActive">Active</button>
            <button className="btnDone" id = "btnDone">Done</button>
        </div>
    );
}