import React, { Component, Fragment } from 'react';
import OptionsModal from './OptionsModal';

import PropTypes from 'prop-types';

class AddedTestCases extends Component {

    // Proptypes
    static propTypes = {
        backlog: PropTypes.object.isRequired,
    }

    // Component state to show modal
    state = {
        dontShowModal: true
    }

    // Toggle modal view
    toggleModal = (e) => {
        
        this.setState({ dontShowModal: !this.state.dontShowModal })
    }


    render() {

        // Destructuring the state
        const { dontShowModal } = this.state;
        
        return (
            <Fragment>
                <div className="test-case d-flex justify-content-between px-4 mb-3">
                    <span className="py-auto my-auto"> {this.props.backlog.title} </span>

                    <div className="button-section">
                        <button className="btn case-btn" onClick={this.toggleModal}> 
                            Pass 
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fas fa-angle-down"></i>
                        </button>
                        
                        {/* Condition to display modal */}
                        { dontShowModal ? null : (<div className="modaal">
                            <OptionsModal  />
                        </div>) }           
                    </div>                    
                </div>
            </Fragment>
        )
    }
} 


export default AddedTestCases;