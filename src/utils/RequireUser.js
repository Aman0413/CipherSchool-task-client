import React from "react";
import { cookies } from "react-cookie";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function RequireUser() {
  const [cookies, setCookie] = useCookies();
  const user = cookies.jwt;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireUser;
