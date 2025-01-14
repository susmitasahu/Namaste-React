import React from "react";

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");

  useEffect(
    () => {
      console.log("useEffect render");
    },
    [btnNameReact]
  );

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
