import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header/Header';
import ListLeague from './components/ListLeague/ListLeague';
import League from './components/League/League';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return ( 
    <div className = "App" >
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header/>
                </Route>
                <Route path="/home">
                    <Header/>
                </Route>
                <Route path="/league/:leagueId">
                    <LeagueDetails></LeagueDetails>
                </Route>
                <Route path="*">
                 <NoMatch />
                </Route>
            </Switch>
        </Router>
       
    </div>
    );
}

export default App;