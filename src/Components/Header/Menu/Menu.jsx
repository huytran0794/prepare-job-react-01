import React from "react";

const Menu = () => {
  return (
    <ul className="menu d-flex flex-grow-1">
      <li className="menu-item ">
        <a href="#" className="active">
          home
        </a>
      </li>
      <li className="menu-item">
        <a href="#">about</a>
      </li>
      <li className="menu-item">
        <a href="#">contact</a>
      </li>
      <li className="menu-item">
        <a href="#">404 page</a>
      </li>
    </ul>
  );
};

export default Menu;
