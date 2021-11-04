import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
        <span>
          {/* <NavLink to="/groups">Groups</NavLink>{" - "}
          <NavLink to="/events">Events</NavLink> */}
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <h1>Hello 2
      </h1>
      <Router>
        <Switch>
          <Route exact path="/claims">
            <Claims currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </ Route>
          <Route exact path="/claims/new">
            <Claims currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default AuthenticatedApp;