import React, { useEffect } from 'react';

import Loader from '../loader/Loader';

import TableView from './TableView';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions/todoActions';
import { loadUser } from '../../redux/actions/userActions';

const TodoList = (props) => {
    const { fetchTodos, todo, loadUser } = props;

    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);

    const handleViewUser = (id, noteId) => {
        loadUser(id, noteId);
    };

    return (
        <div className='todo-wrapper'>
            <div className='section-head'>
                <RiCalendarTodoLine />
                <h2 className='s-title'>ToDo List</h2>
            </div>
            {!todo.loading && !todo.error && (
                <div className='table-wrapper'>
                    <TableView data={todo.todos} onViewUser={handleViewUser} />
                </div>
            )}
            {todo.loading && <Loader text='Fetching Todos...' />}
            {todo.error && (
                <p style={{ margin: '20px 0' }}>
                    Error while fetching. Try refreshing page...
                </p>
            )}
            <div className='todo-container'></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        loadUser: (id, noteId) => dispatch(loadUser(id, noteId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
