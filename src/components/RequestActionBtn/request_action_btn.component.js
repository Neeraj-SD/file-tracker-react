import React from 'react';

import './request_action_btn.styles.css'

const RequestActionBtn = ({ type }) => {

    return (
        <span className={`request-btn ${type}`} > {type}</span >
    )
}
export default RequestActionBtn