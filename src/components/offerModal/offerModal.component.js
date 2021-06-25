import React, { useContext, useState } from 'react';

// utils functions
import { getOffer } from '../../helpers/offers.utils';

// context
import { AppContext } from './../../context/appContext';

const OfferModal = ({ offer, setClickedOffer }) => {
  const {
    showSpinner,
    setShowSpinner,
    setUser,
    setErrorMessage,
    ErrorMessage,
    setSuccessMessage,
    successMessage,
  } = useContext(AppContext);

  const [clickedBtn, setClickedBtn] = useState(false);

  const handleCloseModal = () => {
    setClickedOffer(false);
    setClickedBtn(false);
  };

  return (
    <div id="myModalProduct" className="productModal">
      <div className="modal-content">
        <div className="modal-body">
          <span className="closeproduct" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="wrapper-modal-offer">
            <div className="title-single-product-modal">{offer.name}</div>
            {!clickedBtn && !showSpinner && (
              <div
                className="info-product-single"
                style={{ margin: '0 auto', width: '1%' }}
              >
                <div className="row">
                  <div className="col-md-6 col-xs-6">
                    <strong className="number-info-points-single">
                      {offer.points}
                    </strong>
                    <p>Points</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {!clickedBtn && !showSpinner && (
            <a
              href="#/"
              className="btn-blue"
              onClick={() =>
                getOffer(
                  offer._id,
                  setShowSpinner,
                  setUser,
                  setErrorMessage,
                  setSuccessMessage,
                  setClickedBtn
                )
              }
            >
              Get this offer!
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
