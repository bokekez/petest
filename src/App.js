import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter'
import Efekt from './components/Efekt'
import Posts from './components/Posts'
import ListForm from './components/ListForm';
import Drop from './components/Drop';
import Color from './components/Color';


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection:'row' }}>
      <TodoList/>
      <div style={{marginLeft: '5rem'}}>
      <h1>Counter</h1>
        <Counter/>
      </div>
      <div style={{marginLeft: '5rem'}}>
      <h1>Api</h1>
        <Efekt/>
      </div>
      <div style={{marginLeft: '5rem'}}>
      <h1>Render</h1>
        <Posts/>
      </div>
      <div style={{marginLeft: '5rem'}}>
      <h1>List</h1>
        <ListForm/>
      </div>
      <div style={{marginLeft: '5rem'}}>
      <h1>Drop</h1>
        <Drop/>
      </div>
      <div style={{marginLeft: '5rem'}}>
      <h1>Color button</h1>
        <Color/>
      </div>
    </div>
    
  );
}

export default App;
