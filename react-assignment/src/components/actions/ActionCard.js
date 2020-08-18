import React from 'react';
import timeImg from './time-vector.png';
import prof1 from './prof1.png';
import prof2 from './prof2.png';
import prof3 from './prof3.png';
import prof4 from './prof4.png';

const ActionCard = () => {
    return (
        <div className="card">
            <div className="top">
                <span> Apply gredient colours on the dashboard sidenav </span>
                <span>
                    <a href="!#" style={{ color: 'inherit' }}>
                        <i className="fas fa-ellipsis-h"></i>
                    </a>
                </span>
            </div>

            <div className="bottom">
                <div>
                    <img src={timeImg} alt="t"/>
                    <span>Due Aug 8</span>
                </div>
                
                <div className="prof-imgs">
                    
                    <img src={prof1} alt="1"/>
                    <img src={prof2} alt="2"/>
                    <img src={prof3} alt="3"/>
                    <img src={prof4} alt="4"/>
                    <span>
                        +4
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default ActionCard;
