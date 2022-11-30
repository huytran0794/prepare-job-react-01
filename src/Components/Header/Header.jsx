import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper d-flex justify-between align-center ">
        <Logo />
        <Menu />
        <Search />
      </div>
    </header>
  );
};

export default Header;
