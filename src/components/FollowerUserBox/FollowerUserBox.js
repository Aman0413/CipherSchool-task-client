import React, { useEffect, useState } from "react";
import "./FollowerUserBox.scss";
import { axiosClient } from "../../utils/axiosClient";

function FollowerUserBox(props) {
  const [data, setData] = useState();
  const id = props.id;
  console.log(id);
  async function getUserData() {
    const res = await axiosClient.get(
      "user/singleUser",
      {
        id,
      },

      {
        withCredentials: true,
      }
    );
    if (res.data.status === "ok") {
      setData(res.data);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {data ? (
        <div className="FollowerUserBox" id={props.id}>
          <div className="img-box">
            <img src={props.userImage} alt="" />
          </div>
          <div className="name-flex">
            <h3>{data.result.firstName}</h3>
            <h3>{data.result.lastName}</h3>
          </div>
          <button className="btn-primary btn">Follow</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FollowerUserBox;
