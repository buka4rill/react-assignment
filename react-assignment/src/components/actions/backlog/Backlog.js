import React, { Component, Fragment } from 'react';
import AddButton from '../AddButton';

import PropTypes from 'prop-types';


class Backlog extends Component {
    // Component State
    state = {
        text: ''
    };

    // Proptypes
    // static PropTypes = {
    //     addBacklogs: PropTypes.func.isRequired,
    // }

    // Actions
    // onKeyUp = e => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //     }
    // }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        // this.onKeyPress();
        // console.log(this.state.text)
       
        // form verification
        if (this.state.text === '') {
            // Do something
        } else {
            console.log(this.state.text);
            // this.props.addBacklogs(this.state.text);
        }

    }

    onKeyPress = e => {
        if (e.key === 'Enter') {
            // Stop enter line break
            e.preventDefault();

            // Submit the form value
            this.onSubmit(e);
        } 
    }



    render() {
        return (
            <Fragment>
                <div className="heading d-flex justify-content-between mb-3">
                    <span>
                        Backlog 
                    </span>
                    
                    <span>
                        <a href="!#" style={{ color: 'inherit' }}>
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </span>
                </div>

                {/* Add Button */}
                <div className="col-md-12 add-button mb-3">
                    <a href="!#">
                        <AddButton />
                    </a>
                </div>
    
                {/* Input Section */}
                <form action="" className="form mb-3" onSubmit={(e) => this.onSubmit(e) } >
                    <textarea 
                        type="text" 
                        name="text" 
                        className="add-content"
                        id="text"
                        onKeyPress={e => this.onKeyPress(e)}
                        onChange={this.onChange}
                        value={this.state.text}
                    ></textarea>
                </form>
            </Fragment>
        )
    }
}

export default Backlog;
