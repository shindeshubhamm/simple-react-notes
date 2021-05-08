import React, { useMemo } from 'react';

import Loader from '../loader/Loader';

import { RiUser6Fill } from 'react-icons/ri';
import { connect } from 'react-redux';

const UserDetails = (props) => {
    const { todos, user } = props;

    const { loading, userData, noteId } = user;

    const todo = useMemo(() => {
        if (noteId !== -1) {
            return todos.find((t) => t.id === noteId);
        }
        // eslint-disable-next-line
    }, [noteId]);

    return (
        <div className='user-wrapper'>
            <div className='section-head'>
                <RiUser6Fill />
                <h2 className='s-title'>User Details</h2>
            </div>
            {loading && <Loader text='Fetching User...' />}
            {!loading &&
                (userData ? (
                    <div className='view-data'>
                        <div className='note-data'>
                            <p className='n-id'>
                                Note <span>#{todo.id}</span>
                            </p>
                            <h3 className='n-title'>{todo.title}</h3>
                        </div>
                        <div className='user-data'>
                            <p className='data-type'>Full Name</p>
                            <h1 className='user-fullname'>
                                {userData.name} (#{userData.id})
                            </h1>
                            <p className='data-type'>Username</p>
                            <p className='username'>{userData.username}</p>
                            <p className='data-type'>Email</p>
                            <p className='username'>
                                {userData.email?.toLowerCase()}
                            </p>
                            <p className='data-type'>Website</p>
                            <a
                                href={`http://${userData.website}`}
                                target='_blank'
                                rel='noreferrer'
                                className='website'>
                                {userData.website}
                            </a>
                        </div>
                    </div>
                ) : (
                    <p style={{ margin: '20px 0' }}>
                        Select todo to view data...
                    </p>
                ))}
            <div id='userdata'></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
        user: state.user,
    };
};

export default connect(mapStateToProps)(UserDetails);
