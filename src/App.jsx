import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Staking from "./pages/staking";
import "./App.css";
import Roadmap from "./pages/Roadmap";

import LoginModal from "./partials/LoginModal";
import Home1 from "./Home1";
import Home2 from "./Home2";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  const email = React.useRef();
  const password = React.useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const [display, setDisplay] = React.useState();

  const login = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // Define the email and password combinations
    const emailPasswords = [
      { email: "reelstats@gmail.com", password: "19283746" },
      { email: "reelstatscustomers@gmail.com", password: "password1" },
      { email: "reelstatscustomers@gmail.com", password: "password2" },
      // Add more email and password combinations here
    ];

    // Check if the entered email and password match any combination
    const matchedPair = emailPasswords.find(
      (pair) => pair.email === emailValue && pair.password === passwordValue
    );

    if (matchedPair) {
      // Store the matched email and password in localStorage
      localStorage.setItem("emailData", matchedPair.email);
      localStorage.setItem("passwordData", matchedPair.password);
    }
  };

  function fp() {
    setDisplay(
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Sorry you do not have access yet!!!").start();
        }}
      />
    );
  }

  const [openLoginModal, setOpenLoginModal] = React.useState(true);
  const handleOpenLoginModal = () => setOpenLoginModal(false);

  console.log(handleOpenLoginModal);

  return (
    <div>
      {getEmail && getPassword ? (
        getEmail === "reelstats@gmail.com" && getPassword === "19283746" ? (
          <Home1 />
        ) : (
          <Home2 />
        )
      ) : openLoginModal ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home handleOpenLoginModal={handleOpenLoginModal} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/Communities"
            element={<Staking handleOpenLoginModal={handleOpenLoginModal} />}
          />
          <Route
            path="/Activities"
            element={<Roadmap handleOpenLoginModal={handleOpenLoginModal} />}
          />
        </Routes>
      ) : (
        <div className="login-page">
          <form className="form" onSubmit={login}>
            <div className="inputBox inputss inputsss">
              {" "}
              <input
                type="text"
                required="required"
                ref={email}
                className="input"
              />{" "}
              <span className="spans">Email</span>{" "}
            </div>
            <div className="inputBox inputss">
              {" "}
              <input
                type="text"
                required="required"
                ref={password}
                className="input"
              />{" "}
              <span className="spans">Password</span>{" "}
            </div>
            <button class=" button login-button" style={{ fontWeight: "bold" }}>
              Login
            </button>
            <h5
              className="fp"
              onClick={fp}
              style={{ fontWeight: "bold", color: "black", marginTop: "25px" }}
            >
              Contact admin for Authentication
              <div
                style={{
                  color: "",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "15px",
                  fontColor: "green",
                }}
              >
                {" "}
                +2348101825955
              </div>
            </h5>
            {display}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
