import React from "react";
import logo from "../../../core/assets/img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo-link">
        <img src={logo} alt="logo" className="site-logo" />
      </a>
    </div>
  );
};

export default Logo;
