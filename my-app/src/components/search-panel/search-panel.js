import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component{
  state ={
    label: ''
  }
  addValue = (e) =>{
    const value = e.target.value;
    this.setState({label:value})
    
  }
  render(){
    const {onSearch} = this.props;
    const {label} = this.state;
    return(
      <form className ="add-items d-flex search-input " onSubmit ={(e)=>{
        e.preventDefault();
        onSearch(label);
      }}>
      <input type="text"
        className="form-control" placeholder="type to search"
        onChange={this.addValue} value={label}
      />
    </form>
    )
  }
} 

export default SearchPanel;
