import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItemsList = useSelector((store) => store.cartItemsList);
  
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch({ type: "Quantity_Increment", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "Quantity_Decrement", payload: id });
  };
  const deleteCartItems = (id) => {
    dispatch({ type: "Delete_Cart_Items", payload: id });
  };
  
  const sumWithInitial = cartItemsList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0,
  );

  return (
    <>
      <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Cart</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Cart</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Cart Page Start */}

        {cartItemsList.length < 1 ? (
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="text-center">
                <h2>There are no items in the cart list</h2>
                <p>Please add some items to the list</p>
                <Link to="/" className="btn btn-primary">
                  Go to Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItemsList.map((item) => {
                      return (
                        <tr key={item.id}>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <img
                                src={item.thumbnail}
                                className="img-fluid me-5 rounded-circle"
                                style={{ width: 80, height: 80 }}
                                alt={item.title}
                              />
                            </div>
                          </th>
                          <td>
                            <p className="mb-0 mt-4">{item.title}</p>
                          </td>
                          <td>
                            <p className="mb-0 mt-4">{item.price} $</p>
                          </td>
                          <td>
                            <div
                              className="input-group quantity mt-4"
                              style={{ width: 100 }}
                            >
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-sm btn-minus rounded-circle bg-light border"
                                  onClick={() => handleDecrement(item.id)}
                                >
                                  <i className="fa fa-minus" />
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control form-control-sm text-center border-0"
                                value={item.quantity}
                                readOnly
                              />
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-sm btn-plus rounded-circle bg-light border"
                                  onClick={() => handleIncrement(item.id)}
                                >
                                  <i className="fa fa-plus" />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 mt-4">
                              {(item.price * item.quantity).toFixed(2)} ${" "}
                              {/* Calculate total */}
                            </p>
                          </td>
                          <td>
                            <button
                              className="btn btn-md rounded-circle bg-light border mt-4"
                              onClick={() => deleteCartItems(item.id)}
                            >
                              <i className="fa fa-times text-danger" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="row g-4 justify-content-end">
                <div className="col-8" />
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                  <div className="bg-light rounded">
                    <div className="p-4">
                      <h1 className="display-6 mb-4">
                        Cart <span className="fw-normal">Total</span>
                      </h1>
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="mb-0 me-4">Subtotal:</h5>
                        <p className="mb-0">${sumWithInitial.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                      <h5 className="mb-0 ps-4 me-4">Total</h5>
                      <p className="mb-0 pe-4">${sumWithInitial.toFixed(2)}</p>
                    </div>
                    <Link to="/checkout"
                      className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                      type="button"
                    >
                      Proceed Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Cart Page End */}
      </div>
    </>
  );
};

export default Cart;
