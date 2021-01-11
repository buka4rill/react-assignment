import React, { Fragment } from 'react';
import applogo from './applogo.png';
import snicon1 from './snicon1.png';
import snicon2 from './snicon2.png';
import snicon3 from './snicon3.png';
// import snicon4 from './snicon4.png';

const Sidenav = ({ closeSideBar }) => {
    // Props passed above
    // console.log(closeSideBar)

    return (
        <Fragment>
            <div className="sidenav">
                <div className="section-1 mb-4" style={{ padding: '25px 25px 0 25px' }}>
                    <img src={applogo} alt="logo" />
                </div>

                <hr style={{ background: '#E8E7EA', opacity: '0.1' }}/>   

                <div className="section-2 d-flex flex-column text-center justify-content-center align-items-center mb-5 mt-5 mx-auto">
                    <span className="m-2 p-2 active">
                        <img src={snicon1} className="" alt=".1"/>
                    </span>
                
                    <span className="m-2 p-2">
                        <img src={snicon2} alt=".1"/>
                    </span>
                
                    <span className="m-2 p-2">
                        <img src={snicon3} alt=".1"/>
                    </span>
                </div>

                <hr style={{ background: '#E8E7EA', opacity: '0.1' }}/>   

                <div className="section-3 d-flex flex-column text-center justify-content-center align-items-center mb-5 mt-5 mx-auto">
                    <span className="circle text-white p-2 m-3" style={{ background: '#23B3E8', borderRadius: '50%', fontSize: '8px'}}>
                        PN
                    </span>

                    <span className="circle text-white p-2 m-3" style={{ background: '#23B3E8', borderRadius: '50%', fontSize: '8px'}}>
                        PN
                    </span>

                    <span className="circle text-white p-2 m-3" style={{ background: '#23B3E8', borderRadius: '50%', fontSize: '8px'}}>
                        PN
                    </span>

                    <span className="circle text-white p-2 m-3" style={{ background: '#23B3E8', borderRadius: '50%', fontSize: '8px'}}>
                        PN
                    </span>
                </div>

                <hr style={{ background: '#E8E7EA', opacity: '0.1' }}/>   

                <div className="section-4 mt-5 d-flex text-center justify-content-center align-items-center" >
                    <span 
                        className="close-side-nav p-2 text-white d-flex text-center justify-content-center align-items-center" 
                        style={{ background: 'rgb(232,231,234,0.2)', borderRadius: '50%', width: '40px', height: '40px'}}
                        onClick={closeSideBar}
                    >
                        <i className="fas fa-angle-left text-white" style={{ opacity: '1'}}></i>
                    </span>
                </div>

            </div>
        </Fragment>
    )
}

export default Sidenav;
