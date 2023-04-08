import React from "react";
import { cookies } from "react-cookie";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function OnlyIfNotLogin() {
  const [cookies, setCookie] = useCookies();
  const user = cookies.jwt;

  return user ? <Navigate to="/" /> : <Outlet />;
}

export default OnlyIfNotLogin;
