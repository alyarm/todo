import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';


function TodoList({ todos, removeTask, completeTask }) {

    return (
        <div className="todo__list">
            <div className="todo__container">
                {todos.map((todo, index) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            index={index}
                            removeTask={removeTask}
                            completeTask={completeTask}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default TodoList;
