import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cart from "./Pages/Cart"; // 'Cart' should be capitalized correctly
import Checkout from "./Pages/Checkout";
import Testimonial from "./Components/testimonial/Testimonial";
import ContactUs from "./Pages/ContactUs";
import reportWebVitals from "./reportWebVitals";
import { productstore } from "./Store/ProductsStore/ProductsStore.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginForm from "./Components/AutnticationFrom/LoginForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/testimonial", element: <Testimonial /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={productstore}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
