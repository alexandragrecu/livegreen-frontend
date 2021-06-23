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
  console.log('DATAaaa', data);
  let response = await productService.scanProduct(data);
  console.log('RESPONSE PRODUNCT', response);

  if (response) {
    if (response.status === 200) {
      console.log('SSSS', response.data);
      const product = {
        name: response.data.data.name,
        points: response.data.data.points,
        barCode: response.data.data.qrCode,
        id: response.data.data._id,
      };
      setProduct(product);
    } else if (response.status === 401 || response.status === 404) {
      setErrorMessage(response.data.message);
      setProduct('No product!');
    } else {
      setErrorMessage('An error occured. Please try again later!');
      setProduct('No product!');
    }
  }

  setShowSpinner(false);
};

export const updatePoints = async (id, setShowSpinner, setUser) => {
  setShowSpinner(true);
  console.log('ID', id);
  let response = await productService.updatePointsAfterScan({ id });
  console.log(response);
  if (response) {
    if (response.status === 200) {
      let userUpdated = await userOptions.getUser(setUser);
      console.log('userUpdated', userUpdated);
    }
  }
  setShowSpinner(false);
};
