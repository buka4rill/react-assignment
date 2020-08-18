import React from 'react';
import Backlog from './backlog/Backlog';
import ActionCard from './ActionCard';

const ActionsSection = () => {
    return (
        <div className="container px-0 mt-3">
            <Backlog />
            <div className="col-md-2 px-0">
                <ActionCard />
            </div>
        </div>
    )
}

export default ActionsSection;
