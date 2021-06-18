import React, { Fragment, useEffect, useContext } from 'react';

// context
import { AppContext } from './context/appContext';

// import components
import Header from './components/header/header.component';
import Login from './components/login/login.component';
import Register from './components/register/register.component';

// import css files
import './assets/css/style.css';
import './assets/css/animate.css';
import Sticky from 'react-sticky-el';

// calling 'wowjs'
import WOW from 'wowjs';

const App = () => {
  const { token } = useContext(AppContext);

  useEffect(() => {
    if (token !== null || token !== undefined) {
      window.localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);
  useEffect(() => {
    new WOW.WOW({
      animateClass: 'animated',
      offset: 100,
      callback: function (box) {},
    }).init();
  }, []);

  return (
    <Fragment>
      <Sticky>
        <Header />
      </Sticky>
      <Login />
      <Register />
    </Fragment>
  );
};

export default App;
