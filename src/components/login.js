import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const form = {
    backgroundColor: "#FFF4FC",
    borderRadius: "20px",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
    padding: "10%",
    paddingTop: "5%",
    width: "60%",
    fontFamily: "Inter, sans-serif",
  };
  const input = {
    marginTop: "3%",
    marginBottom: "3%",
    fontWeight: 100,
    width: "100%",
    borderRadius: "10px",
    borderStyle: "solid",
    fontFamily: "Arial",
    padding: "5%",
    fontSize: "14px",
  };
  const login = {
    borderStyle: "none",
    backgroundColor: "#FF8AC0",
    color: "white",
    borderRadius: "5px",
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "8%",
    marginBottom: "8",
  };
  const register = {
    borderStyle: "none",
    backgroundColor: "#009EFF",
    color: "white",
    borderRadius: "5px",
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "8%",
    // marginBottom: "8",
  };
  const forgetPass = {
    fontSize: "12px",
    textAlign: "center",
  };
  const errMsg = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    color: "red",
    marginBottom: "15px",
  };

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  const alert = {
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div className="container" style={form}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div class="alert alert-success" role="alert" style={alert}>
            Login Successful
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChange}
                style={input}
              />
            </div>
            <span style={errMsg}>{formErrors.username}</span>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
                style={input}
              />
            </div>
            <span style={errMsg}>{formErrors.password}</span>
            <br />
            <a href="" style={forgetPass}>
              Forgot Password?
            </a>
            <input type="submit" value="Login" style={login} />
            <Link to="/register">
              <button style={register}>Register</button>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
