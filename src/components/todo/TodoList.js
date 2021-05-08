import React from 'react';

import { RiCalendarTodoLine } from 'react-icons/ri';

const TodoList = () => {
    return (
        <div className='todo-wrapper'>
            <div className='section-head'>
                <RiCalendarTodoLine />
                <h2 className='s-title'>ToDo List</h2>
            </div>
        </div>
    );
};

export default TodoList;
