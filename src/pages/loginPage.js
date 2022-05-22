import React from "react";
import Banner from "../components/banner";
import Login from "../components/login";

export default function LoginPage() {
  const leftSide = {
    display: "block",
    margin: "auto",
    padding: "20%",
    paddingRight: 0,
  };
  const rightSide = {
    display: "block",
    margin: "auto",
    paddingTop: "10%",
  };
  return (
    <div className="row">
      <div className="col-6">
        <div className="container" style={leftSide}>
          <Banner />
        </div>
      </div>
      <div className="col-6">
        <div className="container" style={rightSide}>
          <Login />
        </div>
      </div>
    </div>
  );
}
