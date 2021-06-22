import axios from 'axios';

import { getToken } from '../helpers/helpers.utils';

// constants
import { API_URL } from './../constants/constants';

// get user data
export const getUser = async (params) => {
  const token = getToken();

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  try {
    let response = await axios({
      method: 'get',
      url: `${API_URL}/users/user-data`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
