import React from 'react';
import TodoBtn from '../item-status-filter-btn'
import './item-status-filter.css';

const ItemStatusFilter = ({arrBtn, onClick}) => {
	return (
		<div className='btn-group'>
			{arrBtn.map((item) => {
				const {label, id,  ...itemProps} = item;
				return <TodoBtn {...itemProps} key={label} name ={label} onClick={()=>{onClick(id)}}/>
			})}
		</div>
	);
};

export default ItemStatusFilter;
