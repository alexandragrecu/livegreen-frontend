import React, { Fragment, useContext } from 'react';

// context
import { AppContext } from './../../context/appContext';

// import components
import Login from './../../components/login/login.component';
import Register from './../../components/register/register.component';

// import images
import image1 from './../../assets/images/Image_1.png';
import bec from './../../assets/images/bec.png';
import grup1 from './../../assets/images/Group_64.png';
import laptop from './../../assets/images/laptop.png';
import salata1 from './../../assets/images/salata-1.png';
import salata2 from './../../assets/images/salata-2.png';
import metrou from './../../assets/images/metrou.png';

const Home = ({ howRef, rewardsRef, aboutRef }) => {
  const { user, showSpinner } = useContext(AppContext);

  return (
    <Fragment>
      {/* Login and Register components are just some modals that appear when you click their buttons on Homepage, they don't appear anywhere else*/}
      {!user && <Login />}
      {!user && <Register />}

      {/* main section - user is not logged */}
      {!user && (
        <div className="main-content">
          <div className="section-1-homepage">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="subtitle-section-1-home">
                    It's never hard to be green!
                  </div>
                  <div className="title-section-1-home">
                    <span>Working toward a </span>world without
                    <br /> waste
                  </div>
                  <div className="text-section-1-home">
                    <p>
                      With Live Green, you’ll be able to get rewarded every time
                      you help your community cut down on waste.{' '}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <img style={{ maxWidth: '100%' }} src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={howRef}
            className="section-2-homepage wow fadeInUp"
            data-wow-duration="2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-xs-12">
                  <div className="elements-column">
                    <div className="box-section-general">
                      <img src={bec} alt="" />
                      <h3>Start Magic Calculator</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-xs-12"></div>
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      How it works? <span>lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-3-homepage wow fadeInUp"
            data-wow-duration="2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      How it works? <span>lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-xs-12"></div>
                <div className="col-md-5 col-xs-12">
                  <div className="elements-column">
                    <div className="box-section-general">
                      <img src={grup1} alt="" />
                      <h3>Start Magic Calculator</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={rewardsRef}
            className="section-4-homepage wow fadeInUp"
            data-wow-duration="2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <img style={{ maxWidth: '100%' }} src={laptop} alt="" />
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      Get rewards <span>el dolor sit amet</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-5-homepage wow fadeInUp"
            data-wow-duration="2s"
          >
            <div ref={aboutRef} className="container">
              <h2>About us</h2>
              <div className="row">
                <div className="col-md-5 col-xs-12">
                  <div className="elements-column">
                    <div className="box-section-general">
                      <img src={bec} alt="" />
                      <h3>Start Magic Calculator</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-xs-12"></div>
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      About us <span>lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-6-homepage wow fadeInUp"
            data-wow-duration="2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      How it works? <span>lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-xs-12"></div>
                <div className="col-md-5 col-xs-12">
                  <div className="elements-column">
                    <div className="box-section-general">
                      <img src={bec} alt="" />
                      <h3>Start Magic Calculator</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* main section - user is logged */}
      {user && !showSpinner && (
        <div className="main-content">
          <div className="section-1-logged">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="title-general-home">
                    <span>Hello,</span> {user.firstName}
                    <span>!</span>
                  </div>
                  <div className="text-general-home">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </p>
                  </div>
                  <div className="info-section-1-logged">
                    <div className="cta-section">
                      <a href="#/">Scan a product</a>
                    </div>
                    <div className="disclaimer-points">
                      Your total points: {user.totalPoints}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12"></div>
              </div>
            </div>
          </div>
          <div className="section-2-logged wow fadeInUp" data-wow-duration="2s">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <a href="#/">
                        {' '}
                        <img
                          style={{ maxWidth: '100%' }}
                          src={salata1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <a href="#/">
                        {' '}
                        <img
                          style={{ maxWidth: '100%' }}
                          src={salata2}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      Offer:{' '}
                      <span>reducere restaurant Bucuresti: 300 points</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-3-logged">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="box-text-general">
                    <div className="title-general-home">
                      Offer:{' '}
                      <span>10 calatorii metrou Bucuresti: 100 points</span>
                    </div>
                    <div className="text-general-home">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin egestas accumsan odio, cursus laoreet mauris
                      porttitor non. Aliquam eu neque nibh. Aenean non
                      pellentesque justo.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <a href="#/">
                    {' '}
                    <img style={{ maxWidth: '100%' }} src={metrou} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
