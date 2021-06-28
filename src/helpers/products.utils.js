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

export const getProducts = async (
  params,
  setProducts,
  setNumProducts,
  setErrorMessage,
  setShowSpinner
) => {
  setShowSpinner(true);
  let response = await productService.getProducts(params);
  if (response) {
    if (response.status === 200 && response.data.status === 'success') {
      setProducts(response.data.data.products);
      setNumProducts(response.data.numProducts);
    } else {
      setErrorMessage(
        'An error occured, we could not find products. Please refresh the page!'
      );
    }
  } else {
    setErrorMessage('An error occured, please try again later!');
  }
  setShowSpinner(false);
};

export const searchProduct = async (
  data,
  setProducts,
  setShowSpinner,
  setErrorMessage,
  setNrProducts,
  setProduct
) => {
  setShowSpinner(true);
  let response = await productService.searchProduct(data);

  if (response) {
    if (response.status === 200 && response.data.status === 'success') {
      if (response.data.products.length === 0) {
        setErrorMessage('We could not find products with this name.');
      } else {
        setProducts(response.data.products);
      }
      setNrProducts(response.data.products.length);
    } else {
      setErrorMessage('An error occured! Please try again later!');
    }
  }
  setShowSpinner(false);
};

export const createProduct = async (
  e,
  data,
  setProducts,
  setNrProducts,
  setErrorMessage,
  setShowSpinner,
  setClickUpdate
) => {
  setClickUpdate(false);
  setShowSpinner(true);
  console.log('aaaa');
  e.preventDefault();
  data.points = parseInt(data.points, 10);
  data.weight = parseInt(data.weight, 10);

  console.log(data);
  const response = await productService.createProduct(data);
  console.log('response', response);
  await getProducts(
    {},
    setProducts,
    setNrProducts,
    setErrorMessage,
    setShowSpinner
  );
  setShowSpinner(false);
};

export const updateSpecificProduct = async (
  params,
  data,
  setProducts,
  setNrProducts,
  setErrorMessage,
  setShowSpinner
) => {
  setShowSpinner(true);
  console.log('paraaams', params);
  const response = await productService.updateProduct(params, data);
  await getProducts(
    {},
    setProducts,
    setNrProducts,
    setErrorMessage,
    setShowSpinner
  );
  setShowSpinner(false);
};

export const deleteSpecificProduct = async (
  params,
  setProducts,
  setNrProducts,
  setErrorMessage,
  setShowSpinner
) => {
  setShowSpinner(true);

  const response = await productService.deleteProduct(params);
  console.log('response', response);
  await getProducts(
    {},
    setProducts,
    setNrProducts,
    setErrorMessage,
    setShowSpinner
  );

  setShowSpinner(false);
};
