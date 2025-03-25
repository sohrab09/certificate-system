import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";


const AuthMiddleware = ({ children, allowedRoles }) => {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {

    let decryptedToken = null;

    if (localStorage.getItem("token")) {
      const secretKey = process.env.REACT_APP_SECRET_KEY;
      const bytes = CryptoJS.AES.decrypt(localStorage?.getItem("token"), secretKey);
      decryptedToken = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
    }


    if (!decryptedToken) {
      setIsAuthorized(false);
      window.location.href = "/";
    } else if (allowedRoles.includes(decryptedToken)) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      navigate("/");
    }

  }, [navigate, allowedRoles]);

  return <>{isAuthorized ? children : null}</>;
};

export default AuthMiddleware;
