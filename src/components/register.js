import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
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
  const register = {
    borderStyle: "none",
    backgroundColor: "#009EFF",
    color: "white",
    borderRadius: "5px",
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "8%",
  };
  const errMsg = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    color: "red",
    marginBottom: "15px",
  };

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
  };
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
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const spchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?123456789]+/;

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.lname) {
      errors.lname = "last name is required";
    } else if (spchar.test(values.lname)) {
      errors.lname = "please enter a valid name";
    }

    if (!values.fname) {
      errors.fname = "first name is required";
    } else if (spchar.test(values.fname)) {
      errors.fname = "please enter a valid name";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "please enter a valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.repassword !== values.password) {
      errors.password = "password doesn't match";
    } else if (values.password.length < 8) {
      errors.password = "password must be more than 8 characters";
    }
    if (!values.repassword) {
      errors.repassword = "please confirm your password";
    } else if (values.repassword !== values.password) {
      errors.repassword = "password doesn't match";
    }
    return errors;
  };
  const success = {
    testAlign: "center",
  };
  const login = {
    borderStyle: "none",
    color: "white",
    borderRadius: "5px",
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: "8%",
    marginBottom: "8",
  };
  return (
    <React.Fragment>
      <div className="container" style={form}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success" style={success}>
            <Link to="/">
              <button type="button" className="btn btn-success" style={login}>
                Registration Successful. Click here to go back to login page
              </button>
            </Link>
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="row">
              <div className="col">
                <div className="field">
                  <input
                    type="text"
                    name="fname"
                    placeholder="first name"
                    value={formValues.fname}
                    onChange={handleChange}
                    style={input}
                  />
                </div>
                <span style={errMsg}>{formErrors.fname}</span>
              </div>
              <div className="col">
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formValues.email}
                    onChange={handleChange}
                    style={input}
                  />
                </div>
                <span style={errMsg}>{formErrors.email}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="field">
                  <input
                    type="text"
                    name="lname"
                    placeholder="last name"
                    value={formValues.lname}
                    onChange={handleChange}
                    style={input}
                  />
                </div>
                <span style={errMsg}>{formErrors.lname}</span>
              </div>
              <div className="col">
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
              </div>
            </div>
            <div className="row">
              <div className="col">
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
              </div>
              <div className="col">
                <div className="field">
                  <input
                    type="password"
                    name="repassword"
                    placeholder="confirm password"
                    value={formValues.repassword}
                    onChange={handleChange}
                    style={input}
                  />
                </div>
                <span style={errMsg}>{formErrors.repassword}</span>
              </div>
            </div>
            <br />
            <input type="submit" value="Register" style={register} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
