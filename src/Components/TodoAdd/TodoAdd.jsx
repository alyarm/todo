import React, { useState } from 'react';
import './TodoAdd.css';


function TodoAdd({ addTask }) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }

    const handleSabmit = (e) => {
        e.preventDefault()
        addTask(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSabmit} id="AddForm" className="add-form">
            <input
                value={inputValue}
                onChange={handleChange}
                className="add-form__input"
                type="text"
                placeholder="Add task..."
            />
            <button className="add-form__btn">Add</button>
        </form>
    );
}

export default TodoAdd;