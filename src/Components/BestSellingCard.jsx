import React from "react";

const BestSellingCard = ({ title, price, thumbnail }) => {
  return (
    <>
      <div className="p-4 rounded bg-light">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              src={thumbnail}
              className="img-fluid rounded-circle w-100"
              alt
            />
          </div>
          <div className="col-6">
            <a href="#" className="h5 two-line-clamp-H2">
              {title}
            </a>
            <div className="d-flex my-3">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">{Math.floor(price)} $</h4>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingCard;
