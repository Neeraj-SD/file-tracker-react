import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../../components/Header/header.component';
import RequestType from '../../components/RequestType/request_type.component';
import ResultTile from '../../components/ResultTile/result_tile.component';

import './request_history.styles.css'

const typeDummy = ['Scholarship', 'Placement', 'Hostel Allotment', 'Medical', 'Duty Leave', 'Scholarship', 'Internship'];
const requestsDummy = [1, 2, 3, 4, 5, 6, 7, 8];

const RequestHistory = () => (
    <div className='request-history'>
        <Header title={'Request History'} />
        <div className='request-history-container'>
            <div className='request-types'>
                {
                    typeDummy.map(type => <RequestType name={type} />)
                }
            </div>

            <div className='search-container'>
                <div className='search-box'>
                    <FontAwesomeIcon className='search-icon' icon="fa-solid fa-magnifying-glass" />
                    <input className='search-input' />
                </div>
                <div className='refresh-btn'></div>
            </div>

            <div className='result-container'>
                <div className='result-header'>
                    <span className='first'>Id</span>
                    <span>From</span>
                    <span>Batch</span>
                    <span>Type</span>
                    <span>Header</span>
                </div>
                <div className='result-listview'>

                    {
                        requestsDummy.map(request => <ResultTile />)
                    }

                </div>
            </div>

        </div>



    </div>
)
export default RequestHistory


