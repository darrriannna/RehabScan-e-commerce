import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CheckoutMRI = () => {
  const services = useSelector((state) => state.services.services);

  const validServices = Array.isArray(services) ? services : [];

  const subtotal = validServices.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = validServices.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Checkout</h1>
      <hr />
      {services.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">Your Cart is Empty</h4>
              <Link to="/" className="btn btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Continue Exploring Services
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    {services.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-5 col-md-6">
                            <p><strong>{item.title}</strong></p>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted">{item.qty}</span> x {item.price}kr
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Services ({totalItems})<span>{subtotal}kr</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                        Total<span>{subtotal}kr</span>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between mt-4">
                      <Link to="/mri-booking" className="btn btn-secondary">Go Back</Link>
                      <Link to="/payment" className="btn btn-primary">Proceed to Payment</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CheckoutMRI;

