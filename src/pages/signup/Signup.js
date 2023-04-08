import React, { useEffect, useState } from "react";
import "./singup.scss";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { axiosClient } from "../../utils/axiosClient";

function Singup() {
  const sucessToast = (msg) => {
    toast.success(msg);
  };
  const errorToast = (msg) => {
    toast.error(msg);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axiosClient.post("/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.data.status === "ok") {
        sucessToast(res.data.result);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        errorToast(res.data.message);
      }
    } catch (err) {
      errorToast(err.message);
      console.log(err);
    }
  }
  return (
    <div className="signup center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="signup-box ">
          <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLasttName(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn-primary">Signup</button>
            <p className="account">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singup;
