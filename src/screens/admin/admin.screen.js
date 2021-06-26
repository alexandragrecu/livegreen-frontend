import React, { useEffect, useState } from 'react';

// import utils
import { getUsers } from '../../helpers/user.utils';

// import components
import ValidationModal from './../../components/validationModal/validationModal.component';

const AdminPage = () => {
  const [users, setUsers] = useState(false);
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

  return (
    <div className="container">
      <div className="container table-wrapper">
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
                  <td>{index + 1}</td>
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
                    onClick={() => setClickedUser(user)}
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
      {clickedUser && (
        <ValidationModal
          firstName={clickedUser.firstName}
          lastName={clickedUser.lastName}
          points={clickedUser.totalPoints}
          handleCancel={handleCancel}
          validate={clickedUser.validatedPoints}
        />
      )}
    </div>
  );
};

export default AdminPage;
