import * as productService from './../services/products.service';

export const scanProduct = async (
  barCode,
  setShowSpinner,
  setProduct,
  setErrorMessage
) => {
  setShowSpinner(true);
  const data = { qrCode: barCode };
  console.log("DATAaaa", data);
  let response = await productService.scanProduct(data);
  console.log('RESPONSE PRODUNCT', response);

  if (response) {
    if (response.status === 200) {
      console.log('SSSS', response.data);
      const product = {
        name: response.data.data.name,
        points: response.data.data.points,
        barCode: response.data.data.qrCode,
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
