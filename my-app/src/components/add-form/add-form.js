import React, { Component } from 'react';

class AddForm extends Component {
	state = {
		label: 'Make todo-app'
	};

	onChange = (e) => {
		const value = e.target.value;
		this.setState({ label: value });
	};

	render() {
		const { onAdded } = this.props;
		const { label } = this.state;
		return (
			<form
				className='d-flex mt-1'
				onSubmit={(e) => {
					e.preventDefault();
					onAdded(label);
					this.setState({ label: '' });
				}}
			>
				<input className='form-control' onChange={this.onChange} value={label} />
				<button className='btn btn-outline-secondary'>Add</button>
			</form>
		);
	}
}

export default AddForm;
