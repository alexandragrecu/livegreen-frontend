import * as authentication from './../services/authenticate.service';

// login
export const doLogin = async (
  loginCredentials,
  setUser,
  setShowSpinner,
  setErrorMessage
) => {
  setShowSpinner(true);

  let response = await authentication.login(loginCredentials);

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

export const doRegister = async (
  registerCredentials,
  setUser,
  setShowSpinner,
  setErrorMessage
) => {
  setShowSpinner(true);

  let response = await authentication.register(registerCredentials);
  console.log(response);
  if (response) {
    if (response.status === 201 && response.data.status === 'success') {
      setUser(response.data.data.user);
    } else if (response.status === 400 && response.data.status === 'fail') {
      setErrorMessage(response.data.message);
    } else {
      setErrorMessage('An error occured. Please try again later!');
    }
  }

  setShowSpinner(false);
};
