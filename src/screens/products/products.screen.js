import React, { useState, useContext, useEffect, Fragment } from 'react';

// context
import { AppContext } from './../../context/appContext';

// images
import img from './../../assets/images/salata-png.png';

// import components
import ProductModal from '../../components/productModal/productModal.component.';
import { searchProduct } from '../../helpers/products.utils';

const Products = () => {
  const {
    setProducts,
    products,
    nrProducts,
    setNrProducts,
    user,
    setUser,
    showSpinner,
    setShowSpinner,
    errorMessage,
    setErrorMessage,
  } = useContext(AppContext);
  console.log('products', products);
  console.log('nrProducts', nrProducts);

  // nr of products for display
  const [nrProd, setNrProd] = useState(3);
  console.log('nrProd', nrProd);
  // for displaying "load more products" button
  const [displayBtn, setDisplayBtn] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [productClicked, setProductClicked] = useState({});

  const handleClick = (product) => {
    setShowModal(true);
    setProductClicked(product);
  };

  const handleLoadMore = () => {
    const nr = nrProd + 3;
    if (nr <= products.length) {
      setNrProd(nr);
    } else {
      setNrProd(products.length);
      setDisplayBtn(false);
    }
  };

  const [productName, setProductName] = useState('');

  const searchProductAfterName = () => {
    searchProduct(
      { name: productName },
      setProducts,
      setShowSpinner,
      setErrorMessage,
      setNrProducts
    );
  };

  useEffect(() => {
    if (products) {
      if (nrProd >= products.length) {
        setDisplayBtn(false);
      }
    }
  }, [products]);

  return (
    <Fragment>
      <div className="main-content">
        <div className="section-1-products">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="beforetitle-general-home">
                  La app de dieta, perfecta para ti
                </div>
                <div className="title-general-home">Products</div>
                <div className="text-general-home">
                  Encuentra las mejores recetas para llevar tu dieta a otro
                  nivel, sin necesidad de afectar su salud
                </div>
              </div>
              <div className="col-md-6 col-xs-12"></div>
            </div>
          </div>
        </div>
        <div className="section-2-products wow fadeInUp" data-wow-duration="2s">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="wrapper-section-1-offers">
                  <div className="disclaimer-points">
                    Your total points: {user.totalPoints}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <form className="search-product" action="" method="">
                  <input
                    type="text"
                    placeholder=" Search a product..."
                    onChange={(e) => setProductName(e.target.value)}
                  />
                  <input
                    type="submit"
                    name=""
                    className="submit-search-product"
                    onClick={searchProductAfterName}
                  />
                </form>
                <form className="filter-product" action="" method="">
                  <label>Sort products</label>
                  <input
                    type="text"
                    name="points"
                    placeholder="Points"
                    disabled="disabled"
                  />
                  <span className="sort">
                    <i
                      className="fa fa-arrow-up first-arrow"
                      aria-hidden="true"
                    ></i>

                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </span>

                  <input
                    type="text"
                    name="weight"
                    placeholder="Weight"
                    disabled="disabled"
                  />
                  <input
                    type="submit"
                    name=""
                    value=""
                    className="submit-filter-product"
                  />
                  <span className="sort">
                    <i
                      className="fa fa-arrow-up first-arrow"
                      aria-hidden="true"
                    ></i>

                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3-products wow fadeInUp" data-wow-duration="2s">
          <div className="container">
            <div className="row">
              <div className="listing-products-page">
                {products.length &&
                  products.slice(0, nrProd).map((product) => (
                    <div key={product._id} className="col-md-4 col-xs-12">
                      <div className="box-single-product">
                        <img src={img} alt="" />
                        <h4>{product.name}</h4>
                        <div className="info-product-single">
                          <div className="row">
                            <div className="col-md-6 col-xs-6">
                              <strong className="number-info-points-single">
                                {product.points}
                              </strong>
                              <p>Points</p>
                            </div>
                            <div className="col-md-6 col-xs-6">
                              <strong className="gramaj">
                                {' '}
                                <span>{product.weight}</span> g
                              </strong>
                              <p>Weight</p>
                            </div>
                          </div>
                        </div>

                        <div className="cta-to-product">
                          <a href="#/" onClick={() => handleClick(product)}>
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {displayBtn && nrProducts && (
              <a href="#/" onClick={handleLoadMore} id="seeMoreProducts">
                Load More Products
              </a>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <ProductModal
          showModal={setShowModal}
          product={productClicked}
          setUser={setUser}
          setShowSpinner={setShowSpinner}
          setErrorMessage={setErrorMessage}
          showSpinner={showSpinner}
          errorMessage={errorMessage}
        />
      )}
    </Fragment>
  );
};

export default Products;