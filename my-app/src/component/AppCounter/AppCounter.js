import React from "react";
import './AppCounter.css'
import {todos} from '../TodoList/AppArr';

export default function AppHeader(){
    return(
        <h3 className="counter">
            {todos.length} more to do, 0 done
        </h3>
    );
}