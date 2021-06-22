import axios from 'axios';

import { getToken } from '../helpers/helpers.utils';

// constants
import { API_URL } from './../constants/constants';

// scan product
export const scanProduct = async (params) => {
  const token = getToken();

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  try {
    let response = await axios({
      method: 'patch',
      url: `${API_URL}/products/scanCode`,
      data: params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
