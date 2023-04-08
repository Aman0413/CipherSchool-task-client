import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
// import userImg from "../../assets/IMG_20201226_162649.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import defaultImg from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";

import { axiosClient } from "../../utils/axiosClient";
import { getMyInfo } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const [updatePopUp, setUpdatePopUp] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [image, setImage] = useState();
  const inputFile = useRef(null);

  const item = useSelector((state) => state.myProfile);

  const dispatch = useDispatch();

  const sucessToast = (msg) => {
    toast.success(msg);
  };
  const errorToast = (msg) => {
    toast.error(msg);
  };
  function handlePopUp() {
    if (updatePopUp) {
      setUpdatePopUp(false);
    } else {
      setUpdatePopUp(true);
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  }

  const onButtonClick = () => {
    inputFile.current.click();
  };

  async function updateDetails(e) {
    e.preventDefault();
    const res = await axiosClient.post(
      "user/update",
      {
        firstName,
        lastName,
        email,
        number,
        image,
      },
      {
        withCredentials: true,
      }
    );

    if (res.data.status === "ok") {
      sucessToast("Updated");
    } else {
      errorToast(res.data.message);
    }
    dispatch(getMyInfo());
  }

  if (item.data) {
    console.log(item.data.result);
  }
  return (
    <div className="Header">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="background-container">
        <div className="container header-container">
          {updatePopUp ? (
            <div className="update-profile">
              <div className="container">
                <div className="update-header">
                  <h3>Profile Update</h3>
                  <p
                    onClick={() => {
                      setUpdatePopUp(false);
                    }}
                  >
                    <MdCancel />
                  </p>
                </div>

                <div className="update-info">
                  <div className="update-right">
                    <div className="update-img">
                      <img src={image ? image : defaultImg} alt="" />

                      <div
                        className="edit center hover-link"
                        onClick={onButtonClick}
                      >
                        <AiFillEdit />
                        <input
                          type="file"
                          className="custom-file-upload "
                          name=""
                          onChange={handleImageChange}
                          ref={inputFile}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="update-left">
                    <form>
                      <input
                        type="text"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        placeholder="Last Name"
                      />
                      <input
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        placeholder="Number"
                      />
                      <div className="btn-box">
                        <button
                          className="btn-primary btn-cancel"
                          onClick={() => {
                            setUpdatePopUp(false);
                          }}
                        >
                          Cancel
                        </button>
                        <button className="btn-primary" onClick={updateDetails}>
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

          {item.data && (
            <div className="header-info-container">
              <div className="left-part ">
                <div className="image-container">
                  <img
                    src={
                      item.data.result.avatar && item.data.result.avatar.url
                        ? item.data.result.avatar.url
                        : defaultImg
                    }
                    alt=""
                  />
                  <div className="edit" onClick={handlePopUp}>
                    <AiFillEdit />
                  </div>
                </div>
                <div className="info-container">
                  <h3>Hello,</h3>
                  <div className="name-box">
                    <h3 className="name">
                      {item.data ? item.data.result.firstName : "first name"}
                    </h3>
                    <h3 className="name">
                      {item.data ? item.data.result.lastName : "last name"}
                    </h3>
                  </div>
                  <p> {item.data ? item.data.result.email : "user email"}</p>
                </div>
              </div>
              <div
                className="right-part"
                onClick={() => {
                  navigate("/userfollowers");
                }}
              >
                <h4>
                  {" "}
                  {item.data ? item.data.result.followers.length : 0}
                  <p> Followers</p>
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
