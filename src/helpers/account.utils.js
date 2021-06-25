import * as accountService from './../services/account.service';
import * as userOptions from './user.utils';

export const updateData = async (
  e,
  data,
  setUser,
  setShowSpinner,
  setErrorMessage,
  setSuccessMessage
) => {
  e.preventDefault();
  setShowSpinner(true);
  let response = await accountService.updateData(data);
  console.log('updatedData', response);

  if (response) {
    if (response.status === 200) {
      await userOptions.getUser(setUser);
      setSuccessMessage('Your account details have been successfully updated.');
    } else {
      setErrorMessage(
        'Your account details could not be updated. Please try again.'
      );
    }
  } else {
    setErrorMessage(
      'Your account details could not be updated. Please try again later.'
    );
  }

  setShowSpinner(false);
};
