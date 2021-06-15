import * as authentication from './../services/authenticate.service';

// login
export const doLogin = async (
  credentials,
  setUser,
  setShowSpinner,
  setErrorMessage
) => {
  setShowSpinner(true);
  let response = await authentication.login(credentials);
  console.log('responseeee', response.status);
  if (response) {
    if (response.status === 200 && response.data.status === 'success') {
      setUser(response.data.data.user);
    } else if (response.status === 401) {
      setErrorMessage('Incorrect email or password.');
    } else if (response.status === 400) {
      setErrorMessage('Please provide email and password.');
    } else {
      setErrorMessage('An error occured, please try again later.');
    }
  }

  setTimeout(() => {
    setShowSpinner(false);
  }, 1000);
};
