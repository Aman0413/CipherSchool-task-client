import React from "react";
import "./Navbar.scss";
import compantLogo from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-container">
        <div className="company-name">
          <div className="company-logo">
            <img src={compantLogo} alt="" />
          </div>
          <h1>CipherSchools</h1>
        </div>
        <div className="search-box">
          <AiOutlineSearch className="logo" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
