import React, { Component, Fragment } from 'react';
import AddButton from '../AddButton';

class Done extends Component {
    render() {
        return (
            <Fragment>
                <div className="heading d-flex justify-content-between mb-3">
                    <span>
                        Done
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
            </Fragment>
        )
    }
}

export default Done;