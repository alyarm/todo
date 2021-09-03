import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, removeTask, completeTask, index }) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div key={todo.id} className={`todo-item ${todo.isCompleted ? "todo-item--completed" : ""}`}>
            <strong className="todo-item__index">{index + 1}&nbsp;</strong>
            <p className="todo-item__body">{todo.task}</p>
            <div className="todo-item__control">
                <button className="todo-item__btn todo-item__btn--edit">
                    {editMode
                        ? <i className='icon icon-floppy'></i>
                        : <i className='icon icon-pencil'></i>
                    }
                </button>
                <button onClick={() => removeTask(todo.id)} className="todo-item__btn todo-item__btn--remove"><i className='icon icon-bin'></i></button>
                <button onClick={() => completeTask(todo.id)} className="todo-item__btn todo-item__btn--complete"><i className='icon icon-checkmark'></i></button>
            </div>
        </div>
    );
}

export default TodoItem;