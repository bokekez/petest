import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoList/>
    </div>
  );
}

export default App;
