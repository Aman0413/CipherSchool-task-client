import React from "react";
import "./PasswordChange.scss";

function PasswordChange() {
  return (
    <div className="PasswordChange">
      <div className="container">
        <div className="password-info-header">
          <h3>PASSWORD & SECURITY</h3>
          <button className="btn-primary">Change</button>
        </div>
        <div className="password-show">......................</div>
        <div className="outline">.</div>
      </div>
    </div>
  );
}

export default PasswordChange;
