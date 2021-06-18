import React, { useContext } from 'react';

// import logo
import logo from './../../assets/images/logo.png';

// import utils
import { showMobileMenu } from '../../helpers/header.utils';

// import context
import { AppContext } from './../../context/appContext';

const Header = () => {
  const { setShowLoginModal, setShowRegisterModal } = useContext(AppContext);
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <div className="logo-area">
              <a href="#/">
                {' '}
                <img src={logo} alt="logo Live Green" />
              </a>
            </div>
          </div>
          <div className="col-md-6 hidden-sm hidden-xs col-xs-12">
            <ul className="header-menu-center">
              <li>
                {' '}
                <a href="#/">How it works</a>{' '}
              </li>
              <li>
                {' '}
                <a href="get-reward.html">Get rewards</a>{' '}
              </li>
              <li>
                {' '}
                <a href="#/">About us</a>{' '}
              </li>
            </ul>
          </div>
          <div className="col-md-3 hidden-sm hidden-xs col-xs-12">
            <ul className="header-menu-right">
              <li onClick={() => setShowLoginModal(true)}>
                {' '}
                <a className="login-button" href="#/">
                  Login
                </a>{' '}
              </li>
              <li onClick={() => setShowRegisterModal(true)}>
                {' '}
                <a className="register-button" href="#/">
                  Register
                </a>{' '}
              </li>
            </ul>
          </div>
          <div className="hidden-md col-xs-12">
            {/* Simulate a smartphone / tablet */}
            <div className="mobile-container">
              {/* Top Navigation Menu*/}
              <div className="topnav">
                <div id="myLinks">
                  <ul className="header-menu-mobile">
                    <li>
                      {' '}
                      <a href="#/">How it works</a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="get-reward.html">Get rewards</a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="#/">About us</a>{' '}
                    </li>
                    <li onClick={() => setShowLoginModal(true)}>
                      {' '}
                      <a className="login-button" href="#/">
                        Login
                      </a>{' '}
                    </li>
                    <li onClick={() => setShowRegisterModal(true)}>
                      {' '}
                      <a className="register-button" href="#/">
                        Register
                      </a>{' '}
                    </li>
                  </ul>
                </div>
                <a href="#/" className="icon" onClick={showMobileMenu}>
                  <i className="fa fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
