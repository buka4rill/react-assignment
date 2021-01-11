import React, { Component } from 'react';
import Modules from './Modules';
import AddedTestCases from './AddedTestCases';
import QuickOverview from './QuickOverview';
import ActionCard from '../actions/ActionCard'


import PropTypes from 'prop-types';

class TestPageSection extends Component {

    static propTypes = {
        // addBacklogs: PropTypes.func.isRequired,
        backlogs: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <div className="container tst-pg  mt-3">
                    <div className="row justify-content-between">
                        <div className="col-lg-2  px-0 mr-3">
                            <Modules />

                            {this.props.backlogs.map((backlog) => (
                                <ActionCard key={backlog.id} backlog={backlog} />
                            ))}
                        </div>
    
                        <div className="col-lg-5 px-0 mr-3">
                            <div className="heading d-flex justify-content-between mb-3">
                                <span>
                                    Added Test Case
                                </span>
                            </div>
                            <div className="component-display py-4">
                                {this.props.backlogs.map((backlog) => (<AddedTestCases key={backlog.id} backlog={backlog}/>))}

                                <div className="test-buttons d-flex justify-content-around" style={{ marginTop: '350px' }}>
                                    <button className="btn btn-primary new" >
                                        New Test Case
                                    </button>

                                    <button className="btn btn-primary test">
                                        Test
                                    </button>
                                </div>
                            </div>

                            
                            
                        </div>
    
                        <div className="col-lg-5  px-0 ">
                            <QuickOverview />
                        </div>
    
                    </div>
                </div>
    
            </div>
            
        )
    }
    
}

export default TestPageSection;
