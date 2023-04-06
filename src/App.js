import "./App.css";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import Information from "./components/information/Information";
import ProfessionalInfo from "./components/professionalInfo/ProfessionalInfo";
import PasswordChange from "./components/passwordchange/PasswordChange";
import Interest from "./components/interest/Interest";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Information />
      <ProfessionalInfo />
      <PasswordChange />
      <Interest />
    </div>
  );
}

export default App;
