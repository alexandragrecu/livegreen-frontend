import * as productService from './../services/products.service';
import * as userOptions from './user.utils';

export const scanProduct = async (
  barCode,
  setShowSpinner,
  setProduct,
  setErrorMessage
) => {
  setShowSpinner(true);
  const data = { qrCode: barCode };
  let response = await productService.scanProduct(data);

  if (response) {
    if (response.status === 200) {
      const product = {
        name: response.data.data.name,
        points: response.data.data.points,
        barCode: response.data.data.qrCode,
        id: response.data.data._id,
      };
      setProduct(product);
    } else if (response.status === 401 || response.status === 404) {
      setErrorMessage(
        'We cannot find this product in our database. Please search for it in Products Section.'
      );
    } else {
      setErrorMessage('An error occured. Please try again later!');
    }
  }

  setShowSpinner(false);
};

export const updatePoints = async (
  id,
  setShowSpinner,
  setUser,
  setErrorMessage,
  setClickedBtn
) => {
  setShowSpinner(true);
  // id = '5fc411b283250e14b4a8b9c4';
  let response = await productService.updatePointsAfterScan({ id });
  if (response) {
    if (response.status === 200) {
      let userUpdated = await userOptions.getUser(setUser);
      console.log('userUpdated', userUpdated);
    } else if (response.status === 404) {
      setErrorMessage(
        'Product not found! Please try again to scan the product!'
      );
    } else {
      setErrorMessage('An error occured! Please try again later!');
    }
  }
  setShowSpinner(false);
  setClickedBtn(true);
};
