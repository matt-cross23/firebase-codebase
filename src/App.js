import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';



const App = () => {
  return (
    <Router>
    <div className="App">
   <Route exact path = "/" component ={Home} />
   <Route exact path = "/login" component ={Login} />
   <Route exact path = "/signup" component ={Signup} />
    </div>
    </Router>
  );
}

export default App;
