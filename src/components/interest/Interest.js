import React from "react";
import "./Interest.scss";
import { useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";

function Interest() {
  const [item, setItem] = useState([]);
  const [popup, setPopup] = useState(false);
  const state = useSelector((state) => state.myProfile);

  function handlePopUp() {
    if (popup) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  }
  function handleClick(e) {
    setItem(e.target.innerText);
  }
  const data = {
    interest: ["React", "Node.js"],
  };
  async function handleSubmit() {
    const res = await axiosClient.post(
      "/user/addInterest",
      {
        interest: data,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
  }

  return (
    <div className="Interest">
      <div className="container">
        <div className="interest-header">
          <h3>INTERESTS</h3>
          <button className="btn-primary" onClick={handlePopUp}>
            Edit
          </button>
        </div>
        <div className="interest-container">
          {state.data && console.log(state.data.result.interest)}
        </div>

        {popup ? (
          <div className="interest-popup">
            <div className="container inner-container">
              <div
                className="box hover-link"
                onClick={handleClick}
                value="App Development"
              >
                App Development
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Web Development"
              >
                Web Development
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Game Development"
              >
                Game Development
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Data Structure"
              >
                Data Structure
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Programming"
              >
                Programming
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Data Science"
              >
                Data Science
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Machine Learning"
              >
                Machine Learning
              </div>
              <div
                className="box hover-link"
                onClick={handleClick}
                value="Other"
              >
                Other
              </div>
            </div>
            <div className="btn-box">
              <button
                className="btn-primary"
                onClick={() => {
                  setPopup(false);
                }}
              >
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Interest;
