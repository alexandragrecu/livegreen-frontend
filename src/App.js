import React, { Fragment, useEffect } from 'react';

// import components
import Header from './components/header/header.component';

// import css files
import './assets/css/style.css';
import './assets/css/animate.css';
import Sticky from 'react-sticky-el';

// calling 'wowjs'
import WOW from 'wowjs';

const App = () => {
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
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
    </Fragment>
  );
};

export default App;
