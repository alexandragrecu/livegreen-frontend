import axios from 'axios';

// constants
import { API_URL } from './../constants/constants';

export const login = async (params) => {
  try {
    let response = await axios({
      method: 'post',
      url: `${API_URL}/users/login`,
      data: params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const register = async (params) => {
  try {
    let response = await axios({
      method: 'post',
      url: `${API_URL}/users/signup`,
      data: params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
