import axios from "axios";
import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [inputValues, setInputValues] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [handleError, setHandleError] = useState("");
  const [result, setResult] = useState("");
  // const { userInfo } = useContext(AuthContext);
  // console.log(userInfo, "data ");

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    const newInput = inputValues.split(" ");
    const number_values = newInput.map((str) => parseInt(str, 10));
    const inputSearchNumber = parseInt(inputSearch);

    const dataToSend = {
      payload: [
        {
          input_values: number_values,
        },
      ],
      search_value: inputSearchNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/search/create-search/",
        dataToSend
      );
      console.log(response.data);
      setResult(response.data.data.result);
    } catch (error) {
      setHandleError(error.response.data.errorMessage[0].message);
    }
  };

  const myFunc = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/v1/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      // const accessToken = response.data.data.accessToken;
      console.log("context data: ", response);
      // console.log(accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  myFunc();

  return (
    <div className=" theme-container">
      <div className="register-page ">
        <div className=" flex items-center justify-center border flex-col border-gray-300  w-full md:w-[50%] h-full md:h-[75%] p-12 rounded">
          <h3 className="text-2xl font-light py-4">Search your result</h3>
          <form className="form-wrap w-full" onSubmit={handleSearchFormSubmit}>
            {/* email */}
            <div className="">
              <input
                type="text"
                name="textArray"
                id=""
                required
                onChange={(e) => setInputValues(e.target.value)}
                placeholder="Input values [1, 2, 3 ,4]"
                className="w-full border mt-4 px-4 py-4 rounded"
              />
            </div>
            {/* password */}
            <div className="">
              <input
                type="text"
                name="searchValue"
                required
                id=""
                onChange={(e) => setInputSearch(e.target.value)}
                placeholder="Search value: 2"
                className="w-full border mt-4 px-4 py-4 rounded"
              />
            </div>

            {/* error */}
            <h3 className="text-red-600">{handleError}</h3>
            {/* submit btn */}
            <button type="submit" className="full-width-btn">
              Khoj
            </button>
          </form>

          <div className="flex justify-start items-center w-full">
            <span className="mt-7 text-md font-bold">Result: {result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
