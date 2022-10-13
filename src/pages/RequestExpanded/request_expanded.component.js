import React from 'react';
import Header from '../../components/Header/header.component';
import RequestActionBtn from '../../components/RequestActionBtn/request_action_btn.component';

import '../RequestExpanded/request_expanded.styles.css'

const RequestExpanded = () => (
    <div className='request-expanded'>
        <Header title={'Request History > Covid  19 Healthcare'} />
        <div className='expanded-container'>
            <div className='request-content'>
                <p className='request-content-text'>
                    {
                        `Sir/Madam, 
                    With due respect, I want to add that I am not in the condition of attending school because of the viral fever. I have been told by our family physician that I have to take proper rest for at least [number of days] days. So, please grant me [number of days] leave. I’m going to be really grateful to you.
                    Thanking you,

                    Yours obediently,
                    Your Name,
                    Class and section
                        Roll No.`
                    }
                </p>
                <div className='request-actions'>
                    <div className='divider' />
                    <div className='remarks-container'>

                        <textarea rows='5' cols='5' type='' placeholder='remarks...' className='remarks-input' />
                    </div>

                    {/* <div className='request-btn mb-16'>Add Remark</div> */}
                    <RequestActionBtn className='mb-10' type='add-remark' />

                    <div className='remarks-container'>
                        <span className='action-name'>Forward:</span>
                        <input type='text' placeholder='Forward to' className='forward-to-input' />
                    </div>
                    <div className='btn-group'>
                        <RequestActionBtn type='forward' />
                        <div></div>
                        <RequestActionBtn type='approve' />
                        <RequestActionBtn type='reject' />

                    </div>
                </div>
            </div>
            <div className=''>2</div>
            <div className=''>3</div>
        </div>
    </div>
)

export default RequestExpanded