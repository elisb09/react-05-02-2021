import React from 'react';
import TodoItem from './TodoItem';

const Todolist = () => {
    return (
        <ul className="list-group mt-3">
            <TodoItem >Read Book</TodoItem>
            <TodoItem important>Cook</TodoItem>
            <TodoItem >Sleep</TodoItem>
        </ul>
    );
};

export default Todolist;