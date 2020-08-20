import React from 'react';

const QuickOverview = () => {
    return (
        <div>
            <div className="heading d-flex justify-content-between mb-3">
                <span>
                    Quick Overview
                </span>
            </div>

            <div className="component-display p-5">
                <div className="card-container">
                    <div className="row">
                        <div className="card col-md-6" style={{ background: '#F15832' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    20
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Top Modules
                            </div>
                        </div>
                        
                        <div className="card col-md-6" style={{ background: 'rgba(3, 41, 61, 0.8)' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    20
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Improvement
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="card col-md-6" style={{ background: '#296799' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    14
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Total Modules test
                            </div>
                        </div>
                        
                        <div className="card col-md-6" style={{ background: '#F8426E' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    20
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Total Failed
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="card col-md-6" style={{ background: '#4DBD98' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    20
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Total Passed
                            </div>
                        </div>
                        
                        <div className="card col-md-6" style={{ background: '#3D43A2' }}>
                            <div className="card-top d-flex justify-content-between">
                                <span className="card-icon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="total-number">
                                    20
                                </span>
                            </div>

                            <div className="card-bottom mt-5">
                                Top Untested
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default QuickOverview
