import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInformation] = useState("");
  //   setUserInformation(response.data),

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
      setUserInformation(response);
    } catch (error) {
      console.log(error);
    }
  };
  myFunc();
  const authInfo = { userInfo, setLoading, user };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
