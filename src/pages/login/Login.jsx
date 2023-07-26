// Login.js
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const apiUrl = "https://itb-nine.vercel.app/api/v1/auth/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handleError, setHandleError] = useState("");

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const userLoginInfo = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(apiUrl, userLoginInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const accessToken = response.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      console.log(response);
      console.log(accessToken);
      setHandleError("");
    } catch (error) {
      setHandleError(error.response.data.errorMessage[0].message);
    }
  };

  return (
    <div className="theme-container">
      <div className="register-page">
        <div className="flex items-center justify-center border flex-col border-gray-300 w-full md:w-[50%] h-full md:h-[75%] p-12 rounded">
          <h3 className="text-2xl font-light py-4">Login now</h3>
          <form className="form-wrap w-full" onSubmit={handleLoginFormSubmit}>
            {/* email */}
            <div className="">
              <input
                type="text"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full border mt-4 px-4 py-4 rounded"
              />
            </div>
            {/* password */}
            <div className="">
              <input
                type="password"
                name="password"
                id=""
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full border mt-4 px-4 py-4 rounded"
              />
            </div>

            {/* submit btn */}
            {/* error */}
            <h3 className="text-red-600">{handleError}</h3>
            <button type="submit" className="full-width-btn">
              Login
            </button>
          </form>

          <span className="mt-7 font-normal text-md">
            I don't have an account{" "}
            <Link to="/register" className="text-green-600 font-bold">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
