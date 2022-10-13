import React from 'react';

import './header.styles.css'

const Header = ({ title }) => (
    <div className='header-container'>
        <div className='header'>
            <p className='header-text'>{title}</p>
        </div>
        <div className='user-details'>
            <div className='user-details-col1'>
                <p className='user-details-name'>Saharsh Santhosh</p>
                <p className='user-details-number'>200692</p>
            </div>
            <div className='user-details-img'><img src='' /></div>
        </div>
    </div>
)

export default Header