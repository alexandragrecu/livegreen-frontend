import React, { useEffect, useState, useContext } from 'react';

// import utils
import { getUsers } from '../../helpers/user.utils';

// import components
import ValidationModal from './../../components/validationModal/validationModal.component';
import ErrorMessage from "./../../components/errorMessage/errorMessage.component";
import SuccessMessage from "./../../components/successMessage/successMessage.component";
import Spinner from './../../components/spinner/spinner.component'

// context
import { AppContext } from './../../context/appContext';


// style for spinner
import { loginStyle } from './../../assets/css/spinner';


const AdminPage = () => {
  const {users, setUsers, showSpinner, errorMessage, successMessage, setErrorMessage, setSuccessMessage} = useContext(AppContext);
  console.log('users', users);
  const getAllUsers = () => {
    getUsers(setUsers);
  };

  const [clickedUser, setClickedUser] = useState(false);

  const handleCancel = () => {
    setClickedUser(false);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleCheck = (user) => {
    setClickedUser(user);
    setErrorMessage(false);
    setSuccessMessage(false);
  }

  return (
    <div className="container">
      <div className="container table-wrapper">
      {!showSpinner && successMessage && <SuccessMessage message={successMessage}/>}
      {!showSpinner && errorMessage && <ErrorMessage message={errorMessage} />}
      <br />
      <br />
      {showSpinner && <Spinner css={loginStyle} className="backgroundSpinner" />}
        <table className="table table-striped table-hover" id="reports-table">
          <thead>
            <tr>
              <th>Nr</th>
              <th className="hide-550">Name</th>
              <th className="hide-550">Email</th>
              <th className="hide-550">Role</th>
              <th className="hide-550">Zip Code</th>
              <th className="hide-550">Total Points</th>
              <th className="hide-550">Validate Points</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <td  className={
                      user.validatedPoints ? 'validate' : 'no-validate'
                    }>{index + 1}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.zipCode}</td>
                  <td
                    className={
                      user.validatedPoints ? 'validate' : 'no-validate'
                    }
                  >
                    {user.totalPoints}
                  </td>
                  <td
                    onClick={() => handleCheck(user)}
                    className={
                      user.validatedPoints ? 'validate' : 'no-validate'
                    }
                  >
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {clickedUser && !successMessage && !errorMessage  && (
        <ValidationModal
          firstName={clickedUser.firstName}
          lastName={clickedUser.lastName}
          points={clickedUser.totalPoints}
          handleCancel={handleCancel}
          validate={clickedUser.validatedPoints}
          id={clickedUser._id}
        />
      )}
    </div>
  );
};

export default AdminPage;
