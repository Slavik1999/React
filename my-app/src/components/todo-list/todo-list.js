import React from 'react';

import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggleDone, onImportant }) => {
	const elements = todos.map((item) => {
		const { id, className,  ...itemProps } = item;

		return (
			<li key={id} className={className}>
				<TodoListItem {...itemProps} onDelete={() => onDelete(id)}
				onToggleDone={() => onToggleDone(id)}
				onImportant ={() => {onImportant(id)}} />
			</li>
		);
	});

	return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
