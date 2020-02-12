import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddForm from '../add-form';

import './app.css';

class App extends Component {
	maxId = 100;

	createTodo(label) {
		return {
			label,
			className:'list-group-item',
			important: false,
			done: false,
			id: this.maxId++
		};
	}

	state = {
		todoData: [ this.createTodo('Drink Coffee'), this.createTodo('Make Awesome App') ],
		todoBtn: [
			{label: 'All', active: true, id: 0, className: 'btn btn-info'},
			{label: 'Active', active: false, id: 1, className: 'btn btn-outline-secondary'  },
			{label: 'Done', active: false, id: 2, className: 'btn btn-outline-secondary'  },
		]
	};

	selectStatusFilter = (id)=>{
		this.setState((prevState)=>{
			const nextState = prevState.todoBtn.map((item)=>{
				if(item.id === id){
					item.active =! item.active;
					item.className = "btn btn-info"
				}
				else if(item.id !== id){
					item.className = "btn btn-outline-secondary"
				}
				return item;
			})
			return{
				arrBtn: nextState
			}
		})
		
		if(id === 0){
			this.setState((prevState)=>{
				const nextState = prevState.todoData.map((item)=>{
					item.className = "list-group-item d-block"
					return item
				})
				return{
					todoData: nextState
				}
			})
		}
		if(id === 1){
			this.setState((prevState)=>{
				const nextState = prevState.todoData.map((item)=>{
					if(!item.done){
						item.className= "list-group-item d-block"
					}
					else{
						item.className= "list-group-item d-none"
					}
					return item
				})
				return{
					todoData: nextState
				}
			})
		}
		if(id === 2){
			this.setState((prevState)=>{
				const nextState = prevState.todoData.map((item)=>{
					if(item.done){
						item.className= "list-group-item d-block"
					}
					else{
						item.className= "list-group-item d-none"
					}
					return item
				})
				return{
					todoData: nextState
				}
			})
		}
	}

	deleteItem = (id) => {
		this.setState((prevState) => {
			return {
				todoData: prevState.todoData.filter((item) => item.id !== id)
			};
		});
	};

	importantItem = (id) => {
		this.setState((prevState) => {
			const nextState = prevState.todoData.map((item) => {
				if (item.id === id) {
					item.important = !item.important;
				}
				return item;
			});
			return {
				todoData: nextState
			};
		});
	};

	toggleDone = (id) => {
		this.setState((prevState) => {
			const nextState = prevState.todoData.map((item) => {
				if (item.id === id) {
					item.done = !item.done;
				}
				return item;
			});
			return {
				todoData: nextState
			};
		});
	};

	searchItem = (label) => {
        this.setState((prevState) => {
			const nextState = prevState.todoData.map((item) => {
				item.className = 'list-group-item d-none'
				if (item.label.startsWith(label)) {
					item.className = 'list-group-item d-block';
				}
				return item;
			});
			return {
				todoData: nextState
			};
		});
    };


	addTodo = (label) => {
		this.setState((prevState) => {
			return {
				todoData: prevState.todoData.concat(this.createTodo(label))
			};
		});
	};



	render() {
		const { todoData } = this.state;
		const todo = todoData.filter((item) => !item.done).length;
		const done = todoData.length - todo;
		return (
			<div className='todo-app'>
				<AppHeader toDo={todo} done={done} />
				<div className='top-panel d-flex'>
					<SearchPanel onSearch={this.searchItem}/>
					<ItemStatusFilter onClick={this.selectStatusFilter} arrBtn = {this.state.todoBtn} />
				</div>

				<TodoList todos={todoData}
				onDelete={this.deleteItem}
				onToggleDone={this.toggleDone}
				onImportant ={this.importantItem}
				/>
				<AddForm onAdded={this.addTodo} />
			</div>
		);
	}
}

export default App;
