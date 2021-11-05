import './App.css';
import NaviBar from "./components/NaviBar";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import NewClaim from './components/NewClaim';
import Claims from './components/Claims'


function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory()
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/login')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <NaviBar />
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Claims currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/claims" component={Claims}>
              <Claims currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/claims/new" component={NewClaim} >
              <NewClaim currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/dogs/:id/edit">
              {/* <EditClaim /> */}
            </Route>
          </Switch>
        </ Router>
      </div>
    </div>
  );
}

export default AuthenticatedApp;