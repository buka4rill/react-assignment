import React, { Component, Fragment } from 'react';
// import AddButton from '../AddButton';
// import ActionCard from '../actions/ActionCard';

// import PropTypes from 'prop-types';


class Modules extends Component {

    render() {
        return (
            <Fragment>
                <div className="heading d-flex justify-content-between mb-3">
                    <span>
                        Modules
                    </span>
                    
                    <span>
                        <a href="!#" style={{ color: 'inherit' }}>
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </span>
                </div>

                {/* {this.props.backlogs.map((backlog) => (
                    <ActionCard key={backlog.id} backlog={backlog} />
                ))} */}
            </Fragment>
        )
    }
}

export default Modules;
