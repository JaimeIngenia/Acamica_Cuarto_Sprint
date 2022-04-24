import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcomev2 from "./components/welcomeV2/WelcomeV2";
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed";
import { Appcontext } from "./components/context/AppContext";
import { AppProvider } from "./components/context/AppContext";
import FriendProfile from "./components/friendProfile/FriendProfile";

ReactDOM.render(
  <React.StrictMode>
    {/* <Appcontext.AppProvider value="hola contex"> */}
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/welcome" element={<Welcomev2 />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/friendProfile" element={<FriendProfile />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
    {/* </Appcontext.AppProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
