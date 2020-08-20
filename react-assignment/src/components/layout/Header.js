import React from 'react'
import logo from './fcmb.png';
import vector from './Vector.png';
import profileImg from './profileImg.png';
import caret from './Vector2.png';
import owner from './owner.png'

import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <div className="container-fluid bg-white">
            <nav className="navbar navbar-expand-lg bg-white py-3">
                {/* Menu Bars */}
                <a href="!#" className="nav-link p-0">
                    <div className="navbar-nav menu-bars">
                        <span id="top"></span>
                        <span id="mid"></span>
                        <span id="bottom"></span>
                    </div>
                </a>
                

                {/* Logo Section */}
                <div className="navbar-brand logoSection ml-5">
                    <img src={logo} alt="logo"/>
                    &nbsp;&nbsp;
                    <span> { title } </span>
                    &nbsp;&nbsp;
                    <span>
                        <a href="!#" style={{ color: 'inherit' }}>
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </span>
                </div>

                {/* Search Input Section */}
                <div className="navbar-nav ml-5">
                    <form action="">
                        <div className="form-group d-flex align-items-center justify-items-center mb-0 border-left pl-4">
                            <label htmlFor="" className="d-flex mx-auto my-auto align-items-center justify-items-center">
                                <i className="fas fa-search" style={{ color: 'rgb(224 223 223)' }}></i>
                            </label>
                            &nbsp;&nbsp;&nbsp;
                            <input type="text" className="form-control" style={{ border: 'none', fontFamily: 'Nunito Sans' }} placeholder="Search" />
                        </div>
                    </form>
                </div>

                {/* User Section */}
                <div className="navbar-nav ml-auto">
                    <div className="navbar-item my-auto">
                        <i className="far fa-bell"></i>
                    </div>

                    <div className="navbar-item my-auto ml-5">
                        
                        <div className="owner-tag py-2">
                            <img src={owner} alt="."/>
                            &nbsp; |  &nbsp;
                            OWNER
                        </div>
                    </div>

                    <div className="navbar-item fancy-tag my-auto ml-5">
                        <img src={vector} alt="vector" />
                    </div>

                    <div className="navbar-item profile d-flex  ml-5">
                        <div className="profile-img my-auto">
                            <img src={profileImg} alt="prof_img"/>
                        </div>

                        <span className="profile-name ml-3">
                            Chioma Davis <br />
                            <small className="profile-email" style={{ color: '#23B3E8' }}>chioma@natabase.com</small>
                        </span>

                        <div>
                            <img src={caret} alt="dd"/>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: 'FCMB: Mobile Banking',
};
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
