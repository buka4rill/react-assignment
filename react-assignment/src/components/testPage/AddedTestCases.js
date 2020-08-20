import React from 'react';
import OptionsModal from './OptionsModal';

const AddedTestCases = () => {
    return (
        <div>
            <div className="heading d-flex justify-content-between mb-3">
                <span>
                    Added Test Case
                </span>
            </div>

            <div className="component-display py-4">
                <div className="test-case d-flex justify-content-between px-4 mb-3">
                    <span className="py-auto my-auto"> Make the background image blur </span>

                    <div className="button-section">
                        <button className="btn case-btn"> 
                            Pass 
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-angle-down"></i>
                        </button>
                        
                        <div className="modaal">
                            <OptionsModal />

                        </div>
                    </div>
                    
                </div>

                <div className="test-case d-flex justify-content-between px-4">
                    <span className="py-auto my-auto"> Make homepage background pop more </span>

                    <button className="btn case-btn"> 
                        Pass 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-angle-down"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddedTestCases;