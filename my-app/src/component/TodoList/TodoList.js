import React from "react";
import './TodoList.css'
import TodoItem from './TodoItem';
import {todos} from './AppArr';
export const TodoList = () =>{
    return(
        <ul className="list">
            {todos.map(item => <TodoItem title={item.title} key={item.title}/>)}
        </ul>
    ); 
}