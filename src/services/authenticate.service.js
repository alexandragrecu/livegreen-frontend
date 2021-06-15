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
    console.log('response', response);
    return response;
  } catch (error) {
    console.log(error.response);

    return error.response;
  }
};
