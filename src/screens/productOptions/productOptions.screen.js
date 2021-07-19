import React, { useContext, useState, useEffect } from 'react';

import FileBase from 'react-file-base64';
import {
  getProducts,
  createProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
} from '../../helpers/products.utils';

// context
import { AppContext } from './../../context/appContext';

import Spinner from '../../components/spinner/spinner.component';

// style for spinner
import { loginStyle } from './../../assets/css/spinner';
import ErrorMessage from '../../components/errorMessage/errorMessage.component';
import SuccessMessage from '../../components/successMessage/successMessage.component';

const ProductOptions = () => {
  const {
    // setProducts,
    // products,
    nrProducts,
    setNrProducts,
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
    modifiedSection,
    setModifiedSection,
  } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    qrCode: '',
    points: '',
    weight: '',
    image: 'none',
  });

  const getAllProducts = () => {
    getProducts(
      {},
      setProducts,
      setNrProducts,
      setErrorMessage,
      setShowSpinner
    );
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const updateProduct = (product) => {
    setClickUpdate(true);
    setId(product._id);
    setProduct({
      name: product.name,
      qrCode: product.qrCode,
      points: product.points,
      weight: product.weight,
    });
  };

  const deleteProduct = (product) => {
    setModifiedSection({ users: false, products: true, offers: false });
    deleteSpecificProduct(
      {
        id: product._id,
      },
      setProducts,
      setNrProducts,
      setErrorMessage,
      errorMessage,
      setSuccessMessage,
      setShowSpinner
    );
  };

  const [id, setId] = useState(false);

  const submitForm = (e, product) => {
    e.preventDefault();
    setSuccessMessage(false);
    setErrorMessage(false);
    if (clickUpdate) {
      updateSpecificProduct(
        { id: id },
        product,
        setProducts,
        setNrProducts,
        setErrorMessage,
        errorMessage,
        setSuccessMessage,
        setShowSpinner
      );
      setModifiedSection({ users: false, products: true, offers: false });
      setClickUpdate(false);
      //   setProduct({});
      setProduct({
        name: '',
        qrCode: '',
        points: '',
        weight: '',
        image: 'none',
      });
    } else {
      setModifiedSection({ users: false, products: true, offers: true });
      createProduct(
        e,
        product,
        setProducts,
        setNrProducts,
        setErrorMessage,
        errorMessage,
        setSuccessMessage,
        setShowSpinner,
        setProduct,
        setClickUpdate
      );
      setProduct({
        name: '',
        qrCode: '',
        points: '',
        weight: '',
        image: 'none',
      });
      setClickUpdate(false);
    }
  };
  const [clickUpdate, setClickUpdate] = useState(false);

  const validateBarCode = (barCode) => {
    if (/^\d+$/.test(barCode) && barCode.length > 9) {
      return true;
    }
    return false;
  };

  const validatePositiveValues = (value) => {
    if (/^\d+$/.test(value) && value > 0) {
      return true;
    }
    return false;
  };

  const [typing, setTyping] = useState({
    barCode: false,
    points: false,
    weight: false,
  });
  return (
    <div className="container">
      <p className="subtitle-products">Products</p>

      <div className="row" style={{ display: 'flex' }}>
        <div className="container table-wrapper">
          {!showSpinner && successMessage && modifiedSection.products && (
            <SuccessMessage message={successMessage} />
          )}
          {!showSpinner && errorMessage && (
            <ErrorMessage message={errorMessage} />
          )}
          {showSpinner && (
            <Spinner css={loginStyle} className="backgroundSpinner" />
          )}
          <br />
          <table className="table table-striped table-hover" id="reports-table">
            <thead>
              <tr>
                <th>Nr</th>
                <th className="hide-550">Name</th>
                <th className="hide-550">Bar code</th>
                <th className="hide-550">Points</th>
                <th className="hide-550">Weight</th>
                <th className="hide-550">Options</th>
              </tr>
            </thead>
            <tbody>
              {/* {noDataMessage && <div><br />{noDataMessage}</div>} */}
              {products &&
                products.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.qrCode}</td>
                    <td>{product.points}</td>
                    <td>{product.weight}</td>

                    <td style={{ cursor: 'pointer' }}>
                      <i
                        className="fa fa-refresh"
                        aria-hidden="true"
                        onClick={() => updateProduct(product)}
                        style={{ marginRight: '15px', color: '#6cc57c' }}
                      ></i>
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        style={{ color: '#e50000' }}
                        onClick={() => deleteProduct(product)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 col-xs-12">
          <br />
          <br />
          <br />
          <form className="search-product" action="" method="">
            <input type="text" placeholder=" Search a product..." />
            <input type="submit" name="" className="submit-search-product" />
          </form>
          <form className="filter-product" action="" method="">
            <label>
              {clickUpdate ? 'Update a product' : 'Create a new product'}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={clickUpdate ? product.name : product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
              type="text"
              name="barCode"
              //   value={updateProduct.barCode ? updateProduct.barCode : ''}
              placeholder="barCode"
              value={clickUpdate ? product.qrCode : product.qrCode}
              onChange={(e) =>
                setProduct({ ...product, qrCode: e.target.value })
              }
              onFocus={() => setTyping({ ...typing, barCode: true })}
              onBlur={() => setTyping({ ...typing, barCode: false })}
            />
            {!typing['barCode'] &&
              product.qrCode &&
              !validateBarCode(product.qrCode) && (
                <ErrorMessage message="Please enter a valid barCode" />
              )}
            <input
              type="text"
              name="points"
              placeholder="Points"
              value={clickUpdate ? product.points : product.points}
              onChange={(e) =>
                setProduct({ ...product, points: e.target.value })
              }
              onFocus={() => setTyping({ ...typing, points: true })}
              onBlur={() => setTyping({ ...typing, points: false })}
            />
            {!typing['points'] &&
              product.points &&
              !validatePositiveValues(product.points) && (
                <ErrorMessage message="Please enter valid points!" />
              )}

            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={clickUpdate ? product.weight : product.weight}
              onChange={(e) =>
                setProduct({ ...product, weight: e.target.value })
              }
              onFocus={() => setTyping({ ...typing, weight: true })}
              onBlur={() => setTyping({ ...typing, weight: false })}
            />

            {!typing['weight'] &&
              product.weight &&
              !validatePositiveValues(product.weight) && (
                <ErrorMessage message="Please enter a valid weight!" />
              )}

            <br />
            <br />
            {/* <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setProduct({ ...product, image: 'none' })}
            /> */}
            <input
              type="submit"
              name=""
              value=""
              className="submit-filter-product"
              onClick={(e) => submitForm(e, product)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
