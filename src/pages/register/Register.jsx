import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handleError, setHandleError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const registerUserData = {
      name: name,
      email: email,
      password: password,
    };

    console.log(registerUserData);

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/user/create-user",
        registerUserData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const accessToken = response.data.data.accessToken;
      console.log(response);
      console.log(accessToken);
      setHandleError("");
    } catch (error) {
      setHandleError(error.response.data.errorMessage[0].message);
    }
  };

  return (
    <div className=" theme-container">
      <div className="register-page ">
        <div className=" flex items-center justify-center border flex-col border-gray-300  w-full md:w-[50%] h-full md:h-[75%] p-12 rounded">
          <h3 className="text-2xl font-light py-4">Register now</h3>
          <form className="form-wrap w-full" onSubmit={handleFormSubmit}>
            {/* name */}
            <div className="">
              <input
                type="text"
                name="name"
                id=""
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border mt-4 px-4 py-4 rounded"
              />
            </div>
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
            {/* error */}
            <h3 className="text-red-600">{handleError}</h3>
            {/* submit btn */}
            <button type="submit" className="full-width-btn">
              Register
            </button>
          </form>

          <span className="mt-7 font-normal text-md">
            Already have an account{" "}
            <Link to="/login" className="text-green-600 font-bold">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
