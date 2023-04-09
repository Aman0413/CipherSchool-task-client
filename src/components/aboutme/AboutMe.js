import React, { useState } from "react";
import "./AboutMe.scss";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { axiosClient } from "../../utils/axiosClient";

function AboutMe() {
  const [about, setAbout] = useState();
  const item = useSelector((state) => state.myProfile);
  const [isEditing, setIsEditing] = useState(false);

  const sucessToast = (msg) => {
    toast.success(msg);
  };
  const errorToast = (msg) => {
    toast.error(msg);
  };

  async function handleSubmit() {
    const res = await axiosClient.post(
      "/user/updateAboutMe",
      {
        aboutMe: about,
      },
      {
        withCredentials: true,
      }
    );
    setIsEditing(false);
    if (res.data.status === "ok") {
      sucessToast("Updated");
    } else {
      errorToast(res.data.message);
    }
  }
  const handleEditClick = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  return (
    <div className="AboutMe">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container aboutme-container">
        <div className="about-me-section">
          <h3>ABOUT ME</h3>
          <span className="flex-btn">
            <button className="btn-primary" onClick={handleEditClick}>
              Edit
            </button>
            {isEditing && (
              <button
                type="submit"
                className="btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </span>
        </div>
        {item.data && (
          <div className="input-box">
            {isEditing ? (
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Add something about you."
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
            ) : (
              <div className="aboutMe-data">{item.data.result.aboutMe}</div>
            )}
          </div>
        )}
        <div className="bottum-line">.</div>
      </div>
    </div>
  );
}

export default AboutMe;
