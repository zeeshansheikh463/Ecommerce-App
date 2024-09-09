import React, { useState } from "react";
import BestSellingCard from "../BestSellingCard";
import { useSelector } from "react-redux";

const BestSalerSection = () => {
  const productList = useSelector((store) => store.productList);
  return (
    <>
      {/* Bestsaler Product Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
            {/* <button className="btn btn-primary" onClick={getData}>
              get Data
            </button> */}
          </div>
          <div className="row g-4">
            {productList?.map((val) => {
              const { title, description, price, thumbnail } = val;
              return (
                <div className="col-lg-6 col-xl-4">
                  <>
                    <BestSellingCard
                      title={title}
                      description={description}
                      price={price}
                      thumbnail={thumbnail}
                    />
                  </>
                </div>
              );
            })}
            {/* <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-1.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-2.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-3.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-4.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-2">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Bestsaler Product End */}
    </>
  );
};

export default BestSalerSection;
