import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Signup } from './Signup';



const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
   <Route exact path = "/" element={<Home />}>
    </Route>
   <Route exact path = "/login" element={<Login />}>
    </Route>
   <Route exact path = "/signup" element={<Signup />}>
   </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
