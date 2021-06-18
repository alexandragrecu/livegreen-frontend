import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import { AppContext } from './context/appContext';

// import components
import Header from './components/header/header.component';

// import screens
import Home from './screens/home/home.screen';

// import css files
import './assets/css/style.css';
import './assets/css/animate.css';
import Sticky from 'react-sticky-el';

// calling 'wowjs'
import WOW from 'wowjs';

// import style
import { affix } from './assets/js/style';

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
      <Sticky stickyStyle={affix}>
        <Header />
      </Sticky>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <Register /> */}
    </Fragment>
  );
};

export default App;
