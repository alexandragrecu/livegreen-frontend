import React, { useContext } from 'react';

// import { Link } from 'react-router-dom';

// import logo
import logo from './../../assets/images/logo.png';

// import utils
import { showMobileMenu } from '../../helpers/header.utils';

// import context
import { AppContext } from './../../context/appContext';
import { doLogout } from '../../helpers/authenticate.utils';

const Header = () => {
  const {
    setShowLoginModal,
    setShowRegisterModal,
    user,
    setShowSpinner,
    setUser,
    setToken,
  } = useContext(AppContext);
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
          {!user && (
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
          )}
          {!user && (
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
          )}
          {!user && (
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
          )}

          {/* if user is logged */}
          {user && (
            <div className="col-md-9 hidden-sm hidden-xs col-xs-12">
              <ul className="header-menu-center">
                <li>
                  {' '}
                  <a href="#/">Get Points</a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="#/">Products</a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="#/">Offers</a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="#/">Articles</a>{' '}
                </li>
                <li className="dropdown">
                  {' '}
                  <button className="dropbtn" href="#/">
                    Menu
                  </button>
                  <ul className="dropdown-content">
                    <li>
                      {' '}
                      <a href="#/"> Your profile</a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="#/"> Account settings</a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="#/"> Contact us</a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="#/"> About us</a>{' '}
                    </li>
                  </ul>
                </li>
                <li
                  onClick={() =>
                    doLogout(
                      setShowSpinner,
                      setUser,
                      setToken,
                      setShowLoginModal,
                      setShowRegisterModal
                    )
                  }
                >
                  {' '}
                  <a className="logout" href="#/">
                    Logout
                  </a>{' '}
                </li>
              </ul>
            </div>
          )}
          {user && (
            <div className="hidden-md col-xs-12">
              {/* Simulate a smatphone / tablet */}
              <div className="mobile-container">
                {/* Top Navigation Menu */}
                <div className="topnav">
                  <div id="myLinks">
                    <ul className="header-menu-mobile">
                      <li>
                        {' '}
                        <a href="#/">Get Points</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#/">Products</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#/">Offers</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#/">Articles</a>{' '}
                      </li>
                      <li className="dropdown">
                        {' '}
                        <button className="dropbtn" href="#/">
                          Menu
                        </button>
                        <ul className="dropdown-content">
                          <li>
                            {' '}
                            <a href="#/"> Your profile</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <a href="#/"> Account settings</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <a href="#/"> Contact us</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <a href="#/"> About us</a>{' '}
                          </li>
                        </ul>
                      </li>
                      <li
                        onClick={() =>
                          doLogout(setShowSpinner, setUser, setToken)
                        }
                      >
                        {' '}
                        <a className="logout" href="#/">
                          Logout
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
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
