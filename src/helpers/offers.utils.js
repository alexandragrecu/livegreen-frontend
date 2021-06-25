import * as offerService from './../services/offer.service';
import * as userOptions from './user.utils';

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

export const getOffer = async (
  id,
  setShowSpinner,
  setUser,
  setErrorMessage,
  setSuccessMessage,
  setClickedBtn
) => {
  setShowSpinner(true);
  setClickedBtn(true);
  const response = await offerService.getOffer(id);

  if (response) {
    if (response.status === 200) {
      setSuccessMessage('Congrats! Check your email!');
      let userUpdated = await userOptions.getUser(setUser);
      console.log('userUpdated', userUpdated);
    } else {
      setErrorMessage('An error occurred, please try again!');
    }
  } else {
    setErrorMessage('An error occurred, please try again later!');
  }

  setShowSpinner(false);
};

export const searchOffer = async (
  e,
  keyword,
  setOffers,
  setShowSpinner,
  setErrorMessage
) => {
  e.preventDefault();
  setShowSpinner(true);
  const response = await offerService.searchOffer({ name: keyword });

  if (response) {
    if (response.status === 200) {
      if (response.data.offers.length) {
        setOffers(response.data.offers);
      } else {
        setErrorMessage(
          'We could not find any offers. Please try another word.'
        );
        setOffers([]);
      }
    } else {
      setErrorMessage(
        'An error occurred while searching offers. Please try again later.'
      );
    }
  }
  console.log('response specific offer', response);
  setShowSpinner(false);
};
