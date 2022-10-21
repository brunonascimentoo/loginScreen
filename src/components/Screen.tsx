import React from "react";
import "./screen.css";

export function Screen() {
  return (
    <>
      <div className="screen-container">
        <div className="screen-card-container">
          <div className="screen-login-name">
            <h1>Login</h1>
            <p>Enter yuor credentials</p>
          </div>

          <div className="screen-input-container">
            <input type="text" placeholder="Enter with your email" />
            <input type="password" placeholder="Enter with your password" />
            <button type="submit">login</button>
            <a href="#">
              <p>Forgot yout password?</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
