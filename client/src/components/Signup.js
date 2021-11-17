import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState("")

  const displayError = () => {
    return errors.map(error => {
      return <div className="alert alert-danger" role="alert">{error}</div>
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      })
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            setCurrentUser(user);
            history.push('/claims')
          })
        } else {
          response.json().then((errors => setErrors(errors.errors)))
        }
      })
  }

  return (
    <div className="body-app">
      <div className="form-outsider">
        <div className="form-container">
          <div className="authForm">
            <form className="register-form" onSubmit={handleSubmit}>
              {errors ?
                <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
              }
              <h1>Sign Up</h1>
              <input
                type="text"
                id="name"
                className="form-field"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text"
                id="username"
                className="form-field"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                type="password"
                id="password"
                className="form-field"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                type="password_confirmation"
                ide="password_confirmation"
                className="form-field"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
              />
              <br />
              <Button variant="success" type="submit">Sign Up</Button>{' '}
              <p>- or -</p>
              <Link className="d-grid gap-2" to="/">
                <Button variant="secondary">Login</Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup