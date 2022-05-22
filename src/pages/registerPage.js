import React from "react";
import Banner from "../components/banner";
import Register from "../components/register";

export default function RegisterPage() {
  const banner = {
    textAlign: "center",
    padding: "2%",
  };
  return (
    <React.Fragment>
      <div className="row" style={banner}>
        <Banner />
      </div>
      <div className="row">
        <Register />
      </div>
    </React.Fragment>
  );
}
