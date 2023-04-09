import React, { useEffect } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import AboutMe from "../../components/aboutme/AboutMe";
import Information from "../../components/information/Information";
import ProfessionalInfo from "../../components/professionalInfo/ProfessionalInfo";
import PasswordChange from "../../components/passwordchange/PasswordChange";
import Interest from "../../components/interest/Interest";
import { useDispatch } from "react-redux";
import { getMyInfo } from "../../redux/slices/userSlice";
import ChiperMap from "../../components/ciphermap/ChiperMap";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInfo());
  });

  return (
    <div className="Home">
      <Navbar />
      <Header />
      <AboutMe />
      <ChiperMap />
      <Information />
      <ProfessionalInfo />
      <PasswordChange />
      <Interest />
    </div>
  );
}

export default Home;
