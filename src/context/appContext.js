import React, { useMemo, createContext, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage.hook';

// CONTEXT ===================================
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', false);
  console.log(typeof setUser);

  // login

  // login credentials
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  // show login modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  console.log('showww', showLoginModal);

  console.log('credentials', credentials);
  // spinner
  const [showSpinner, setShowSpinner] = useState(false);
  // error message
  const [errorMessage, setErrorMessage] = useState(false);

  /* eslint-disable */
  const store = {
    credentials,
    setCredentials,
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
    showLoginModal,
    setShowLoginModal,
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
