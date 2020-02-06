import React from 'react';
import './App.css';
import AppTitle from './component/AppTitle/AppTitle';
import AppCounter from './component/AppCounter/AppCounter';
import AppSearch from './component/AppSearch/AppSearch';
import AppButtonSearch from './component/AppButtonSearch/AppButtonSearch'
import {TodoList} from './component/TodoList/TodoList';
import AppAdd from './component/AppAdd/AppAdd';
import AppButtonAdd from './component/AppButtonAdd/AppButtonAdd'






function App() {
  return (
      <div className='container'>
        <div className='headerContainer'>
          <AppTitle />
          <AppCounter />
        </div>
        <div className="searchContainer">
          <AppSearch />
          <AppButtonSearch />
        </div>
        <TodoList />
        <div className="addContainer">
          <AppAdd />
          <AppButtonAdd/>
        </div>
      </div>
  );
}

export default App;
