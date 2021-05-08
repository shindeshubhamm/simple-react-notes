import React from 'react';

import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

const Alerts = (props) => {
    const {
        app: { alerts },
    } = props;

    return (
        <div className='alerts-wrapper'>
            {alerts.map((alert) => (
                <Alert
                    key={alert.id}
                    variant={alert.type || 'success'}
                    className='myalert'>
                    {alert.message}
                </Alert>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
    };
};

export default connect(mapStateToProps)(Alerts);
