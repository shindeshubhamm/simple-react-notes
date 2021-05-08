import React from 'react';

import TodoList from './components/todo/TodoList';
import UserDetails from './components/user/UserDetails';
import Alerts from './components/alert/Alerts';

import { Container } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

const App = () => {
    return (
        <Container className='my-cont'>
            <Alerts />
            <div className='myheader'>
                <div className='logo-wrapper'>
                    <FcTodoList className='logo' />
                </div>
                <h1 className='appname'>ToDo Keeper</h1>
            </div>
            <div className='content-wrapper'>
                <TodoList />
                <UserDetails />
            </div>
        </Container>
    );
};

export default App;
