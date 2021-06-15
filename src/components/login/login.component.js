import React, { Fragment, useState, useContext, useEffect } from 'react';

// context
import { AppContext } from './../../context/appContext';

// components
import Input from './../input/input.component';
import ErrorMessage from './../errorMessage/errorMessage.component';
import Button from './../button/button.component';
import Spinner from './../spinner/spinner.component';

// helpers
import {
  validatePassword,
  validateEmail,
  validateFieldsForLogin,
} from '../../helpers/validateFields.utils';

import { doLogin } from '../../helpers/authenticate.utils';

const Login = () => {
  // get data from context
  const {
    credentials,
    setCredentials,
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
  } = useContext(AppContext);
  console.log('errorMessage', errorMessage);

  // response after login

  const [typing, setTyping] = useState({
    email: false,
    password: false,
    button: false,
  });

  // checking if user enters credentials (this function is called for onFocus and onBlur events of inputs)
  const isTyping = (key, value) => {
    const typingAux = { ...typing };
    typingAux[key] = value;
    typingAux['button'] = false;
    setTyping(typingAux);
  };

  // function called for updating credentials
  const getCredentials = (key, value) => {
    const credentialsAux = { ...credentials };
    credentialsAux[key] = value;
    setCredentials(credentialsAux);
    setErrorMessage(false);
  };

  // function called when user whats to submit the login form
  const submitLogin = async (e) => {
    e.preventDefault();
    setTyping({ ...typing, button: true });

    if (validateFieldsForLogin(credentials.email, credentials.password)) {
      await doLogin(credentials, setUser, setShowSpinner, setErrorMessage);
    }
  };

  return (
    <Fragment>
      {showSpinner ? <Spinner /> : null}
      {!showSpinner && !user && (
        <div id="myModallogin" className="modalLogin">
          <div className="modal-content">
            <div className="modal-body">
              <span className="close">&times;</span>
              <form className="" action="" method="">
                <div className="form-group">
                  <Input
                    type="email"
                    name="email"
                    value={credentials.email.length ? credentials.email : ''}
                    placeholder="Your email address:"
                    onFocus={() => isTyping('email', true)}
                    onBlur={() => isTyping('email', false)}
                    onChange={(e) => getCredentials('email', e.target.value)}
                  />
                  {credentials.email.length !== 0 &&
                    !typing['email'] &&
                    !validateEmail(credentials.email) && (
                      <ErrorMessage message="Please enter a valid email address!" />
                    )}
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    name="password"
                    value={
                      credentials.password.length ? credentials.password : ''
                    }
                    placeholder="Password:"
                    onFocus={() => isTyping('password', true)}
                    onBlur={() => isTyping('password', false)}
                    onChange={(e) => getCredentials('password', e.target.value)}
                  />
                  {credentials.password.length !== 0 &&
                    !typing['password'] &&
                    validatePassword(credentials.password) !== true && (
                      <ErrorMessage message="Please enter a valid password. It must contain at least 6 characters, 1 upper case, 1 number and 1 special character!" />
                    )}
                  {typing['password'] && (
                    <div className="formInfo">
                      It must contain at least 6 characters, 1 upper case
                      character, 1 number and 1 special character!"
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <Button
                    className="btn-green-gradient"
                    // type="submit"
                    name="Login"
                    onClick={(e) => submitLogin(e)}
                  />
                  <br />
                  <br />
                  {typing['button'] &&
                    !validateFieldsForLogin(
                      credentials.email,
                      credentials.password
                    ) && (
                      <ErrorMessage message="Please complete all fields correctly." />
                    )}
                  {errorMessage && errorMessage.length && (
                    <ErrorMessage message={errorMessage} />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
