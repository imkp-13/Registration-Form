import { useState } from "react";
import "./App.css";

const App = () => {
  const [userValues, setUserValues] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const {
    fullName,
    userName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    gender,
  } = userValues;
  const [errorValues, setErrorValues] = useState({});

  const validation = () => {
    const errors = {};
    if (!fullName.trim()) errors.fullName = "Required field";
    else if (!/^[a-zA-Z\s]*$/.test(fullName))
      errors.fullName = "First name must be alphabet";

    if (!userName.trim()) errors.userName = "Required field";
    else if (!/^[a-zA-Z\s]*$/.test(userName))
      errors.userName = "First name must be alphabet";

    if (!email.trim()) errors.email = "Required field";
    else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email))
      errors.email = "Invalid email";

    if (!phoneNumber.trim()) errors.phoneNumber = "Required field";
    else if (isNaN(phoneNumber))
      errors.phoneNumber = "Phone number cannot be alphabet";
    else if (phoneNumber.length !== 10)
      errors.phoneNumber = "Phone number must be in 10 digits";

    if (!password.trim()) errors.password = "Required field";
    else if (password.trim().length < 8)
      errors.password = "Password cannot be smaller than 8 characters";

    if (!confirmPassword.trim()) errors.confirmPassword = "Required field";
    else if (confirmPassword.trim().length < 8)
      errors.confirmPassword = "Password cannot be smaller than 8 characters";
    else if (password !== confirmPassword)
      errors.confirmPassword = "Password and Confirm password didn't match";
    return Object.keys(errors).length > 0 ? errors : null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorValues((prevState) => ({
      ...prevState,
      [name]: undefined,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validation();
    if (errors) {
      setErrorValues(errors);
      return;
    } else {
      alert("Form submitted successfully!!");
      console.log(userValues);
      setUserValues({
        fullName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="center_container">
      <div className="form_header">
        <h2 className="l-font">Registration</h2>
      </div>
      <div className="form_body">
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="fullName">
              Full Name
            </label>
            <div className="form_control_wrapper">
              <input
                name="fullName"
                value={fullName}
                onChange={handleChange}
                type="text"
                className="s-font"
                placeholder="Enter your name"
              />
              {errorValues.fullName && (
                <p className="error">{errorValues.fullName}</p>
              )}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="userName">
              Username
            </label>
            <div className="form_control_wrapper">
              <input
                name="userName"
                value={userName}
                onChange={handleChange}
                type="text"
                className="s-font"
                placeholder="Enter your username"
              />
              {errorValues.userName && (
                <p className="error">{errorValues.userName}</p>
              )}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="email">
              Email
            </label>
            <div className="form_control_wrapper">
              <input
                name="email"
                value={email}
                onChange={handleChange}
                type="text"
                className="s-font"
                placeholder="Enter your email"
              />
              {errorValues.email && (
                <p className="error">{errorValues.email}</p>
              )}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="phoneNumber">
              Phone Number
            </label>
            <div className="form_control_wrapper">
              <input
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                type="text"
                className="s-font"
                placeholder="Enter your number"
              />
              {errorValues.phoneNumber && (
                <p className="error">{errorValues.phoneNumber}</p>
              )}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="password">
              Password
            </label>
            <div className="form_control_wrapper">
              <input
                name="password"
                value={password}
                onChange={handleChange}
                type="password"
                className="s-font"
                placeholder="Enter your password"
              />
              {errorValues.password && (
                <p className="error">{errorValues.password}</p>
              )}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label s-font" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="form_control_wrapper">
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                type="password"
                className="s-font"
                placeholder="Confirm your password"
              />
              {errorValues.confirmPassword && (
                <p className="error">{errorValues.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="form-group gender_select">
            <h3 className="m-font">Gender</h3>
            <div className="choose">
              <div className="gender_option s-font">
                <label className="s-font">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender == "male"}
                    onChange={handleChange}
                  />
                  <span className="check"></span>
                  <span className="text">Male</span>
                </label>
              </div>
              <div className="gender_option s-font">
                <label className="s-font">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender == "female"}
                    onChange={handleChange}
                  />
                  <span className="check"></span>
                  <span className="text">Female</span>
                </label>
              </div>
              <div className="gender_option s-font">
                <label className="s-font">
                  <input
                    type="radio"
                    name="gender"
                    value="preferNotToSay"
                    checked={gender == "preferNotToSay"}
                    onChange={handleChange}
                  />
                  <span className="check"></span>
                  <span className="text">Prefer not to say</span>
                </label>
              </div>
            </div>
          </div>
          <div className="btn_container">
            <button className="s-font" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
