import React, { Component } from 'react';
import './App.css';
import Leaderboard from './leaderboard/leaderboard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/leaderboard'>Leaderboard</Link></li>
          </ul>

          <hr/>

          <Route exact path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </Router>
    );
  }
};

export default App;
