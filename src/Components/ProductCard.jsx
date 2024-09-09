import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ id, title, description, price, thumbnail }) => {
  const isAuthenticated = !!localStorage.getItem("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartItems = (id) => {
    if (isAuthenticated) {
      dispatch({ type: "Add_To_Cart", payload: id });
      toast.success(" Now Product is successfully Add To Cart" , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        })
    } else {
      toast.error("Please Login First !" , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }
  };
  return (
    <>
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img border border-secondary border-bottom-0 rounded-top">
          <img src={thumbnail} className="img-fluid w-100 rounded-top" alt />
        </div>

        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4 className="two-line-clamp-H">{title}</h4>
          <p className="two-line-clamp-P">{description}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              $ {Math.floor(price)} / kg
            </p>
            <a
              className="btn border border-secondary rounded-pill px-3 text-primary"
              onClick={() => handleCartItems(id)}
            >
              <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
