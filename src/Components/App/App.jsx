import React, { useState } from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoList from '../TodoList/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (inputValue) => {
    if (inputValue) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        task: inputValue,
        isCompleted: false
      }

      setTodos([newTask, ...todos])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const completeTask = (id) => {
    setTodos([
      ...todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })
    ])
  }





  return (
    <div className="app">
      <div className="app__container container">
        <h1 className="title">To do list</h1>
        <TodoAdd addTask={addTask} />
        <TodoList
          todos={todos}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      </div>
    </div>

  );
}

export default App;