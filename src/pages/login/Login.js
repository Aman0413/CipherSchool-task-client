import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import toast, { Toaster } from "react-hot-toast";
function Login() {
  const sucessToast = (msg) => {
    toast.success(msg);
  };
  const errorToast = (msg) => {
    toast.error(msg);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axiosClient.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.status === "ok") {
        navigate("/");
      } else {
        errorToast(res.data.message);
      }
    } catch (error) {
      errorToast(error.message);
      console.log(error);
    }
  }

  return (
    <div className="Login center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="login-box ">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
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
            <button className="btn-primary">Login</button>
            <p className="account">
              Don't have account ? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
