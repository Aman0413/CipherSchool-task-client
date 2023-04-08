import React, { useState } from "react";
import "./Followers.scss";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/wallpaperflare.com_wallpaper Medium.jpeg";
import FollowerUserBox from "../../components/FollowerUserBox/FollowerUserBox";
import { axiosClient } from "../../utils/axiosClient";

function Followers() {
  const item = useSelector((state) => state.myProfile);

  //   const [data, setData] = useState();

  //   async function getUserData() {
  //     const res = await axiosClient.get(
  //       "user/singleUser",
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (res.data.status === "ok") {
  //       setData(res.data);
  //     }
  //   }

  return (
    <div className="Followers">
      <Navbar />
      <div className="container">
        {item.data &&
          item.data.result.followers.map((itr) => {
            <FollowerUserBox id={itr} />;
          })}
      </div>
    </div>
  );
}

export default Followers;
