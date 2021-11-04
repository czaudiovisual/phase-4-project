import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
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
    <div>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Email..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="custom-button" type="submit">
          LOGIN
        </button>
      </form>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
export default Login;