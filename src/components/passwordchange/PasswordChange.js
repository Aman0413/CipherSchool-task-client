import React, { useState } from "react";
import "./PasswordChange.scss";
import { axiosClient } from "../../utils/axiosClient";
import toast, { Toaster } from "react-hot-toast";

function PasswordChange() {
  const [popUp, setPopUp] = useState(false);
  const [password, setPassword] = useState("");
  const sucessToast = (msg) => {
    toast.success(msg);
  };
  const errorToast = (msg) => {
    toast.error(msg);
  };
  function handlePopup() {
    if (popUp) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  }

  async function changePassword(e) {
    e.preventDefault();
    const res = await axiosClient.post(
      "/user/changePassword",
      {
        new_password: password,
      },
      {
        withCredentials: true,
      }
    );

    if (res.data.status === "ok") {
      sucessToast("Password updated");
    } else {
      errorToast(res.data.message);
    }
    console.log(res.data);
  }
  return (
    <div className="PasswordChange">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="password-info-header">
          <h3>PASSWORD & SECURITY</h3>
          <button className="btn-primary" onClick={handlePopup}>
            Change
          </button>
        </div>
        <div className="password-show">......................</div>
        {popUp ? (
          <div className="update-profile">
            <div className="container">
              <div className="update-header">
                <h3>Change Password</h3>
                <p></p>
              </div>

              <div className="update-info">
                <div className="update-left">
                  <form>
                    <input
                      type="text"
                      placeholder="New Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <input type="password" placeholder="Confirm Password" />

                    <div className="btn-box">
                      <button
                        className="btn-primary btn-cancel"
                        onClick={() => {
                          setPopUp(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button className="btn-primary" onClick={changePassword}>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="outline">.</div>
      </div>
    </div>
  );
}

export default PasswordChange;
