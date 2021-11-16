import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
// import Claims from './components/Claims'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser} />
      </Route>
      {/* <Route exact path="*" component={Claims} /> */}
    </Switch>
  )
}

export default UnauthenticatedApp