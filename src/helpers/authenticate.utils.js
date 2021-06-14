import * as authentication from './../services/authenticate.service';

// login
export const doLogin = (credentials) => {
  let response = authentication.login(credentials);
  console.log(response);
};
