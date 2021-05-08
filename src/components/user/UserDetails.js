import React from 'react';

import { RiUser6Fill } from 'react-icons/ri';

const UserDetails = () => {
    return (
        <div className='user-wrapper'>
            <div className='section-head'>
                <RiUser6Fill />
                <h2 className='s-title'>User Details</h2>
            </div>
        </div>
    );
};

export default UserDetails;
