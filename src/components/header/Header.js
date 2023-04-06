import React from "react";
import "./Header.scss";
import userImg from "../../assets/IMG_20201226_162649.jpg";
function Header() {
  return (
    <div className="Header">
      <div className="background-container">
        <div className="container header-container">
          <div className="header-info-container">
            <div className="left-part ">
              <div className="image-container">
                <img src={userImg} alt="" />
              </div>
              <div className="info-container">
                <h3>Hello,</h3>
                <h3 className="name">Aman Verma</h3>
                <p>amanv7404@gmail.com</p>
              </div>
            </div>
            <div className="right-part">
              <h4>23 Followers</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
