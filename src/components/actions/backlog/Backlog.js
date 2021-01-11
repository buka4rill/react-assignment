import React, { Component, Fragment } from 'react';
import AddButton from '../AddButton';

import PropTypes from 'prop-types';


class Backlog extends Component {
    // backlogData;


    // Component State
    state = {
        text: ''
    };

    // Proptypes
    static propTypes = {
        addBacklogs: PropTypes.func.isRequired,
    }

    // Actions
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
       
        // form verification
        if (this.state.text === '') {
            // Do something
        } else {
            // console.log(this.state.text);
            
            // Add Backlogs cards
            // Add to local storage also...
            // this.props.addBacklogs(localStorage.setItem('backlogs', JSON.stringify(this.state.text)));
            this.props.addBacklogs(this.state.text);

            // Clear state
            this.setState({ text: '' });
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

    // React Life Cycle
    // componentDidMount() {
    //     this.backlogData = JSON.parse(localStorage.getItem('backlogs'));

    //     // If there are backlogs in localstorage, set state
    //     if (localStorage.getItem('backlogs')) {
    //         // console.log(this.backlogData)
    //         this.setState({
    //             title: this.backlogData,
    //         })
    //     } else {
    //         this.setState({
    //             title: ''
    //         })
    //     }

    //     // console.log(this.backlogData);
    // } 



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
                <form action="" className="form mb-2" onSubmit={(e) => this.onSubmit(e) } >
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
