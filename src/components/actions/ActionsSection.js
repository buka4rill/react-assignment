import React, { Component } from 'react';
import Backlog from './backlog/Backlog';
import ActionCard from './ActionCard';
import Todo from './todo/Todo';
import Whitespace from './WhiteSpace';
import InProgress from './in_progress/InProgress';
import InReview from './in_review/InReview';
import whitecross from './white-cross.png';
import Done from './done/Done';

import PropTypes from 'prop-types';

class ActionsSection extends Component {

    // Proptypes
    static propTypes = {
        addBacklogs: PropTypes.func.isRequired,
        backlogs: PropTypes.array.isRequired
    }

    render() {
        // console.log(this.props)

        // Destructure backlogs from props
        const { backlogs } = this.props;
        // console.log(backlogs)

        return (
            <div>
                <div className="container  mt-3">
                    <div className="row justify-content-around">
                        <div className="col-lg-2 col-md-3 px-0 mr-2">
                            <Backlog addBacklogs={this.props.addBacklogs} />

                            <div className="simplebar" data-simplebar data-simplebar-auto-hide="false">
                                <div className="card-scroll-1" >
                                    {/* Loop thru backlogs props from App.js and pass to ActionCard */}
                                    {backlogs.map((backlog) => (
                                        <ActionCard key={backlog.id} backlog={backlog} />
                                    ))}
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-2 col-md-3 px-0 mr-2">
                            <Todo />
                            <Whitespace />
                        </div>
    
                        <div className="col-lg-2 col-md-3 px-0 mr-2">
                            <InProgress />
                            <Whitespace />
                        </div>
    
                        <div className="col-lg-2 col-md-3 px-0 mr-2">
                            <InReview />
                            <Whitespace />
                        </div>
                        
                        <div className="col-lg-2 col-md-3 px-0">
                            <Done />
                            <Whitespace />
                        </div>
                    </div>
                </div>
    
                <div className="button-container">
                    <div className="add-component-btn">
                        <a href="!#">
                            <img src={whitecross} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default ActionsSection;
