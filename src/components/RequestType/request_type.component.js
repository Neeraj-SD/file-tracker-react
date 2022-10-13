import React from 'react';

import './request_type.styles.css'

export default function RequestType({ name }) {
    return (
        <p className='request-type'>
            {name}
        </p>);
}