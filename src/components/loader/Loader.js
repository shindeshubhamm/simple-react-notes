import React from 'react';

import { Spinner } from 'react-bootstrap';

const Loader = ({ text }) => {
    return (
        <div className='loader'>
            <Spinner
                animation='border'
                variant='primary'
                className='myspinner'
            />
            <span>{text}</span>
        </div>
    );
};

Loader.defaultProps = {
    text: 'Loading...',
};

export default Loader;
