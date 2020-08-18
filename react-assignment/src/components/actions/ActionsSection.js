import React from 'react';
import Backlog from './backlog/Backlog';
import ActionCard from './ActionCard';
import Todo from './todo/Todo';
import Whitespace from './WhiteSpace';
import InProgress from './in_progress/InProgress';
import InReview from './in_review/InReview';
import Done from './done/Done';

const ActionsSection = () => {
    return (
        <div className="container  mt-3">
            <div className="row justify-content-around">
                <div className="col-lg-2 col-md-3 px-0 mr-2">
                    <Backlog />
                    <ActionCard />
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
                    <InProgress />
                    <Whitespace />
                </div>
                
                <div className="col-lg-2 col-md-3 px-0">
                    <Done />
                    <Whitespace />
                </div>
            </div>
        </div>
    )
}

export default ActionsSection;
