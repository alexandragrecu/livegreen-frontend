import axios from 'axios';

import { getToken } from '../helpers/helpers.utils';

// constants
import { API_URL } from './../constants/constants';

const setToken = () => {
  const token = getToken();
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
};

// get all offers
export const getOffers = async () => {
  setToken();

  try {
    let response = await axios({
      method: 'get',
      url: `${API_URL}/offers`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
