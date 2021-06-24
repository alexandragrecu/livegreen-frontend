import * as offerService from './../services/offer.service';

export const getOffers = async (setShowSpinner, setOffers, setErrorMessage) => {
  setShowSpinner(true);
  const response = await offerService.getOffers();
  if (response) {
    if (response.status === 200) {
      setOffers(response.data.data.offers);
    }
  } else {
    setErrorMessage('An error occured. Please refresh the page.');
  }
  setShowSpinner(false);
};
