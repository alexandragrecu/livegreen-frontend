import * as userServices from './../services/user.service';

export const getUser = async (setUser) => {
  let response = await userServices.getUser();
  if (response) {
    if (response.status === 200) {
      setUser(response.data.data);
    }
  }
};

export const getUsers = async (setUsers) => {
  let response = await userServices.getUsers();
  if (response) {
    if (response.status === 200) {
      setUsers(response.data.data.users);
    }
  }
};

export const validatePoints = async (e, params) => {
  e.preventDefault();
  console.log('utils params', params);
  let response = await userServices.validatePoints(params);
  console.log(response);
};
