import axios from 'axios';

// constants
import { API_URL } from './../constants/constants';

export const login = async (params) => {
  let response;
  try {
    response = await axios({
      method: 'post',
      url: `${API_URL}/users/login`,
      data: params,
    });
  } catch (error) {
    response = error;
  }
  return response;
};
