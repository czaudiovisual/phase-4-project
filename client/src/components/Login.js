import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import "../App.css";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch("/login", requestOptions)
      .then((response) => response.json())
      .then((user) => {
        setCurrentUser(user);
        history.push("/claims");
      });
  };

  return (
    <div className="body-app">
      <div className="form-log">
        <div className="form-container">
          <h3>Login</h3>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              className="custom-imputs"
              type="text"
              className="form-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="custom-imputs"
              type="password"
              className="form-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button variant="success" type="submit">Login</Button>{' '}
            <br />
            <Button variant="secondary" href="/signup">Sign Up</Button>{' '}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;