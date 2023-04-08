import React from "react";
import "./Navbar.scss";
import compantLogo from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";
import { axiosClient } from "../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  async function logout() {
    const res = await axiosClient.post(
      "/user/logout",
      {},
      {
        withCredentials: true,
      }
    );

    navigate("/login");
  }
  return (
    <div className="Navbar">
      <div className="nav-container">
        <div
          className="company-name"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="company-logo">
            <img src={compantLogo} alt="" />
          </div>
          <h1 oncli>CipherSchools</h1>
        </div>
        <div className="btn-primary logout hover-link" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Navbar;
