import React, { useMemo, createContext, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage.hook';

// CONTEXT ===================================
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', false);
  console.log(typeof setUser);

  // login
  // login credentials
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  // show login & register modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // register
  // register credentials
  const [registerCredentials, setRegisterCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password: '',
  });

  // spinner
  const [showSpinner, setShowSpinner] = useState(false);
  // error message
  const [errorMessage, setErrorMessage] = useState(false);

  /* eslint-disable */
  const store = {
    loginCredentials,
    setLoginCredentials,
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
    showLoginModal,
    setShowLoginModal,
    registerCredentials,
    setRegisterCredentials,
    showRegisterModal,
    setShowRegisterModal,
  };

  const storeForProvider = useMemo(() => store, [store]);
  return (
    <AppContext.Provider value={storeForProvider}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
