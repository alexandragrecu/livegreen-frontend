import React, { useContext, useEffect, useState, Fragment } from 'react';

// context
import { AppContext } from './../../context/appContext';

// import components
import Spinner from './../../components/spinner/spinner.component';
import OfferModal from './../../components/offerModal/offerModal.component';
import ErrorMessage from '../../components/errorMessage/errorMessage.component';

// images
import img from './../../assets/images/salata-png.png';

// utils functions
import { getOffers, searchOffer } from '../../helpers/offers.utils';
import {getUser} from './../../helpers/user.utils';

const Offers = () => {
  const {
    offers,
    setOffers,
    showSpinner,
    setShowSpinner,
    user,
    setErrorMessage,
    errorMessage,
    setUser
  } = useContext(AppContext);

  const getCurrentUser = () => {
    getUser(setUser, setShowSpinner);
  }
  /* eslint-disable */
  useEffect(() => {
    getOffers(setShowSpinner, setOffers, setErrorMessage, {}, false);
    getCurrentUser();
  }, []);

  // load more button functionality
  const [nrOffersDisplayed, setNrOffersDisplayed] = useState(3);
  const [displayLoadMoreBtn, setDisplayLoadMoreBtn] = useState(true);

  // for opening offer modal
  const [clickedOffer, setClickedOffer] = useState(false);

  const handleLoadMoreBtn = () => {
    const nr = nrOffersDisplayed + 3;
    if (nr >= offers.length) {
      setDisplayLoadMoreBtn(false);
    }

    setNrOffersDisplayed(nr);
  };

  const isAvailableOffer = (pointOffer) => {
    if (user.totalPoints - pointOffer >= 0) {
      return true;
    }
    return false;
  };

  // for searching products
  const [keyword, setKeyword] = useState(false);

  // filter offers
  const [filterObj, setFilterObj] = useState({});

  useEffect(() => {
    if (offers) {
      setNrOffersDisplayed(3);
      setDisplayLoadMoreBtn(true);
    }
  }, [offers]);

  return (
    <Fragment>
      <div className="main-content">
        <div className="section-1-offers">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="title-general-home">Offers</div>
                <div className="text-general-home">
                  Encuentra las mejores recetas para llevar tu dieta a otro
                  nivel, sin necesidad de afectar su salud
                  ssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaa
                  aaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <br />
                <br />
                <div className="text-general-home">
                  Encuentra las mejores recetas para llevar tu dieta a otro
                  nivel, sin necesidad de afectar su salud
                  ssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className="cta-scan">
                  <a className="btn-blue" href="/get-points">
                    Scan a product
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="wrapper-section-1-offers">
                  <div className="disclaimer-points">
                    Your total points: {user.totalPoints}
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 col-xs-12"
                style={{ marginTop: '100px' }}
              >
                <form className="search-product" action="" method="">
                  <input
                    type="text"
                    name="search-offer"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder=" Search an offer..."
                  />
                  <input
                    type="submit"
                    name=""
                    value=""
                    onClick={(e) =>
                      searchOffer(
                        e,
                        keyword,
                        setOffers,
                        setShowSpinner,
                        setErrorMessage
                      )
                    }
                    className="submit-search-product"
                  />
                </form>
                <form className="filter-product" action="" method="">
                  <label>Filter offers</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City:"
                    onChange={(e) =>
                      setFilterObj({ ...filterObj, city: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    name="points"
                    placeholder="Points:"
                    onChange={(e) =>
                      setFilterObj({ ...filterObj, points: e.target.value })
                    }
                  />
                  <input
                    type="submit"
                    name=""
                    onClick={(e) =>
                      getOffers(
                        setShowSpinner,
                        setOffers,
                        setErrorMessage,
                        filterObj,
                        e
                      )
                    }
                    className="submit-filter-product"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="listing-offers wow fadeInUp" data-wow-duration="2s">
          <div className="container">
            <div className="row">
              {offers &&
                offers.slice(0, nrOffersDisplayed).map((offer) => (
                  <div key={offer._id} className="offer-1 offer-general">
                    <div className="col-md-6 col-xs-12">
                      <div className="box-single-offer">
                        <img src={img} alt="" />
                        <h4>{offer.name}</h4>
                        <div className="info-offer-single">
                          <div className="row">
                            <div className="col-md-6 col-xs-6">
                              <strong className="number-info-points-single">
                                {offer.points}
                              </strong>
                              <p>points</p>
                            </div>
                            <div className="col-md-6 col-xs-6">
                              <strong className="gramaj">
                                {' '}
                                <span
                                  className={
                                    isAvailableOffer(offer.points)
                                      ? 'successMessage'
                                      : 'formHelp'
                                  }
                                >
                                  {isAvailableOffer(offer.points)
                                    ? 'You can get this offer!'
                                    : 'You cannot get this offer!'}
                                </span>
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="cta-to-product">
                          <a
                            href="#/"
                            onClick={
                              !isAvailableOffer(offer.points)
                                ? (e) => e.preventDefault()
                                : () => setClickedOffer(offer)
                            }
                          >
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="title-general-home">
                        Titlu <span>oferta</span>
                      </div>
                      <div className="text-general-home">
                        Detalii: Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                ))}
              {showSpinner && <Spinner />}
              {!offers.length && errorMessage && !showSpinner && (
                <ErrorMessage message={errorMessage} />
              )}

              {displayLoadMoreBtn && !errorMessage && (
                <a href="#/" id="seeMore" onClick={handleLoadMoreBtn}>
                  Load More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {clickedOffer && (
        <OfferModal offer={clickedOffer} setClickedOffer={setClickedOffer} />
      )}
    </Fragment>
  );
};

export default Offers;
