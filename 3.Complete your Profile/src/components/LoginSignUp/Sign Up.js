import React, { useState, useContext } from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

async function signUp(signupData, isLoggedIn, Actions) {
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkjdM-NhsT3JN-KZnX_jIy9puQ1AUwJ5k";

  if (isLoggedIn) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkjdM-NhsT3JN-KZnX_jIy9puQ1AUwJ5k";
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error.message); //Display the error
    } else {
      if (data.registered) {
        Actions.navto(`/home/${data.idToken}`);
        Actions.context.setIsLoggedIn(true);
        Actions.context.setEmail(data.email);
        Actions.context.setDisplayName(data.displayName);
        Actions.context.setDisplayImage(data.profilePicture);
        Actions.context.setidToken(data.idToken);
        console.log(data);
      } else {
        Actions.setIsLogin(true);
      }
    }
    console.log(data); // contains the Firebase ID token, refresh token, and other user data
    // console.log("User has successfully signed up.");
  } catch (error) {
    console.log(error); //handle signup error
    throw error;
  }
}

function SignupForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const navto = useNavigate();
  const ctx = useContext(AppContext);

  // export default SignupForm;
  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    // event.preventDefault();
    const actions = { navto: navto, context: ctx, setIsLogin: setIsLogIn };

    if (isLogIn) {
      // const actions = {
      //   navto: navto,
      //   LoggedIn: ctx.setIsLoggedIn,
      //   idToken: ctx.setidToken,
      // };
      signUp(userDetails, isLogIn, actions);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      if (password === confirmPassword) {
        signUp(userDetails, isLogIn, actions);
      } else {
        alert("password mismatch");
      }
    }
  };

  const handleLoginClick = () => {
    // switch to login form
    setIsLogIn((preState) => !preState);
  };

  return (
    <div className="signup-card">
      <h2>{`${isLogIn ? "Login" : "Sign Up"}`}</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {!isLogIn && (
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        )}
        <button type="submit">{`${isLogIn ? "Login" : "Sign Up"}`}</button>
      </form>
      <button className="login-card" onClick={handleLoginClick}>
        <p className="login-text">{`${
          isLogIn ? "Create New Account" : "Already Have An Account ? Login"
        }`}</p>
      </button>
    </div>
  );
}
// }
export default SignupForm;
