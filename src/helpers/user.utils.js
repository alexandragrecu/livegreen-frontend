import * as userServices from './../services/user.service';

export const getUser = async (setUser) => {
  let response = await userServices.getUser();
  console.log('RESPONSE FOR USER', response);
  if (response) {
    if (response.status === 200) {
      setUser(response.data.data);
    }
  }
};
