import React, { useContext, useState, useEffect } from 'react';

// context
import { AppContext } from './../../context/appContext';

// utils functions
import { updateData } from './../../helpers/account.utils';

// import components
import Spinner from './../../components/spinner/spinner.component';
import ErrorMessage from '../../components/errorMessage/errorMessage.component';
import SuccessMessage from '../../components/successMessage/successMessage.component';

// style for spinner
import { loginStyle } from './../../assets/css/spinner';

const Account = () => {
  const {
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
  } = useContext(AppContext);
  console.log('SUCCESS MESSAGE', successMessage);

  const [updatedUser, setUpdatedUser] = useState(user);
  console.log('updatedUser', updatedUser);

  const handleCancel = () => {
    setUpdatedUser(user);
  };

  const [clickedEditBtn, setClickedBtn] = useState(false);

  const handleEditAccount = (e) => {
    setErrorMessage(false);
    setSuccessMessage(false);
    updateData(
      e,
      updatedUser,
      setUser,
      setShowSpinner,
      setErrorMessage,
      setSuccessMessage
    );
    setClickedBtn(true);
  };

  const getUser = (userInfo) => {
    setUpdatedUser(userInfo);
    setClickedBtn(false);
  };

  useEffect(() => {
    if (user) {
      getUser(user);
    }
  }, [user]);

  return (
    <div className="main-content">
      {clickedEditBtn && showSpinner && (
        <Spinner css={loginStyle} className="backgroundSpinner" />
      )}
      <div className="section-1-settings">
        <div className="container">
          <div className="row">
            <div className="wrapper-form">
              <div className="content-form">
                <h3>Editeaza Profilul</h3>
                <form className="" action="" method="">
                  <div className="form-group">
                    <label htmlFor="fname">First name</label>
                    <input
                      id="fname"
                      type="text"
                      name="fname"
                      value={updatedUser.firstName}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last name</label>
                    <input
                      id="lname"
                      type="text"
                      name="lname"
                      value={updatedUser.lastName}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your email address:</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={updatedUser.email}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipcode">ZIP code:</label>
                    <input
                      id="zipcode"
                      type="text"
                      name="zipcode"
                      value={updatedUser.zipCode}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          zipCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Old password:</label>
                    <input id="password" type="password" name="password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newpassword">New password:</label>
                    <input
                      id="newpassword"
                      type="password"
                      name="newpassword"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <input
                        className="btn-green-gradient"
                        type="submit"
                        name=""
                        value="Edit Account"
                        onClick={(e) => handleEditAccount(e)}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <button
                        className="btn-green-gradient"
                        type="button"
                        name="button"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
                <br />
                {errorMessage && <ErrorMessage message={errorMessage} />}
                {successMessage && <SuccessMessage message={successMessage} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
