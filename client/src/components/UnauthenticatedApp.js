import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginForm setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <SignupForm setCurrentUser={setCurrentUser}/>
      </Route>
    </Switch>
  )
}

export default UnauthenticatedApp