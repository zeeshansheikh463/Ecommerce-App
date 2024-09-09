import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30, 
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("User Successfully Login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
      );
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const isAuthenticated = !!localStorage.getItem("user");

  return (
    <>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Login Now</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form className="row g-4" onSubmit={handleLogin}>
                        <div className="col-12">
                          <label>
                            User Name<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                              value={username}
                              onChange={handleEmail}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill" />
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter Password"
                              value={password}
                              onChange={handlePassword}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <i className="bi bi-bootstrap" />
                      <h2 className="" style={{ fontSize: "26px" }}>
                        Welcome To E-Commerce!!!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
