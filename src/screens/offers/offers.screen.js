import React, { useContext, useEffect, useState } from 'react';

// context
import { AppContext } from './../../context/appContext';

// import components
import Spinner from './../../components/spinner/spinner.component';

// images
import img from './../../assets/images/salata-png.png';
import { getOffers } from '../../helpers/offers.utils';

const Offers = () => {
  const {
    offers,
    setOffers,
    showSpinner,
    setShowSpinner,
    user,
    setErrorMessage,
    ErrorMessage,
  } = useContext(AppContext);
  console.log('offers', offers);

  useEffect(() => {
    getOffers(setShowSpinner, setOffers, setErrorMessage);
  }, []);

  // load more button functionality
  const [nrOffersDisplayed, setNrOffersDisplayed] = useState(3);
  const [displayLoadMoreBtn, setDisplayLoadMoreBtn] = useState(true);

  const handleLoadMoreBtn = () => {
    const nr = nrOffersDisplayed + 3;
    if (nr >= offers.length) {
      setDisplayLoadMoreBtn(false);
    } else {
      setNrOffersDisplayed(nr);
    }
  };

  const isAvailableOffer = (pointOffer) => {
    if (user.totalPoints - pointOffer >= 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="main-content">
      <div className="section-1-offers">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="title-general-home">Offers</div>
              <div className="text-general-home">
                Encuentra las mejores recetas para llevar tu dieta a otro nivel,
                sin necesidad de afectar su salud
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
                Encuentra las mejores recetas para llevar tu dieta a otro nivel,
                sin necesidad de afectar su salud
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

            <div className="col-md-6 col-xs-12" style={{ marginTop: '100px' }}>
              <form className="search-product" action="" method="">
                <input
                  type="text"
                  name=""
                  value=""
                  placeholder=" Search an offer..."
                />
                <input
                  type="submit"
                  name=""
                  value=""
                  className="submit-search-product"
                />
              </form>
              <form className="filter-product" action="" method="">
                <label>Filter offers</label>
                <input type="text" name="" value="" placeholder="City:" />
                <input type="text" name="" value="" placeholder="Points:" />
                <input
                  type="submit"
                  name=""
                  value=""
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
                        <a href="#/">
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
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </div>
                  </div>
                </div>
              ))}

            {displayLoadMoreBtn && (
              <a href="#/" id="seeMore" onClick={handleLoadMoreBtn}>
                Load More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
