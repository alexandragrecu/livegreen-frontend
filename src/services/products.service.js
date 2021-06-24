import axios from 'axios';

import { getToken } from '../helpers/helpers.utils';

// constants
import { API_URL } from './../constants/constants';

const setToken = () => {
  const token = getToken();
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
};

// scan product
export const scanProduct = async (params) => {
  setToken();
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

export const updatePointsAfterScan = async (params) => {
  setToken();

  try {
    let response = await axios({
      method: 'patch',
      url: `${API_URL}/products/updatePointsAfterScan`,
      data: params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getProducts = async (params) => {
  setToken();

  try {
    let response = await axios({
      method: 'get',
      url: `${API_URL}/products`,
      params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const searchProduct = async (params) => {
  setToken();

  try {
    let response = await axios({
      method: 'get',
      url: `${API_URL}/products/search`,
      params,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
