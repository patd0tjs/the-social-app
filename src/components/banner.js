import React from "react";

export default function Banner() {
  const header = {
    color: "#FF8AC0",
    fontWeight: 900,
    fontFamily: "Inter",
    fontSize: "76px",
    margin: 0,
  };
  const subheader = {
    margin: 0,
    marginLeft: "1%",
    fontSize: "40px",
  };
  return (
    <React.Fragment>
      <h3 style={header}>The Social</h3>
      <h3 style={subheader}>A social media platform project</h3>
    </React.Fragment>
  );
}
