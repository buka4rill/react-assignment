import React, { Fragment, Component } from 'react';

class OptionsModal extends Component {
    state = {
        text: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div>
                        <form action="">
                            <div className="form-group d-flex px-2 pt-3">
                                <label htmlFor="" className="d-flex mx-auto my-auto align-items-center justify-items-center">
                                    <i className="fas fa-search" style={{ color: 'rgb(224 223 223)' }}></i>
                                </label>
                                <input 
                                    type="text" 
                                    name="search" 
                                    id="search" 
                                    placeholder="Search name"
                                    className="form-control modal-search"
                                    style={{ background: '#1A0C2F',
                                            opacity: '0.06',
                                            borderRadius: '5px' 
                                    }}
                                    onChange={this.onChange}
                                    value={this.state.text}
                                />
                            </div>
                        </form>
    
                        <div>
                            <ul className="list-group borderrd">
                                <li className="list-group-item border-0">Pass</li>
                                <li className="list-group-item border-0">Failed</li>
                                <li className="list-group-item border-0">Retest</li>
                                <li className="list-group-item border-0">untest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} 


export default OptionsModal;
