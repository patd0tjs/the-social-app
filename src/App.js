import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
