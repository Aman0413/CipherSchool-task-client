import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CookiesProvider } from "react-cookie";

import RequireUser from "./utils/RequireUser";
import OnlyIfNotLogin from "./utils/OnlyIfNotLogin";
import Followers from "./pages/followerPage/Followers";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CookiesProvider>
          <Routes>
            <Route element={<RequireUser />}>
              <Route path="/" element={<Home />} />
              <Route path="/userfollowers" element={<Followers />} />
            </Route>
            <Route element={<OnlyIfNotLogin />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </CookiesProvider>
      </Provider>
    </div>
  );
}

export default App;
