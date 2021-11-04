import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewClaim from './components/NewClaim';
import Claims from './components/Claims'


function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
        <h1>hello</h1>
      </nav>
      <div>

      <Router>
        <Switch>

          <Route exact path="/claims" component={Claims}>
            <Claims currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </ Route>

          <Route exact path="/claims/new" component={NewClaim} >
            <NewClaim currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </ Router>
      </div>
    </div>
  );
}

export default AuthenticatedApp;