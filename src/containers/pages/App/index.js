import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    </Router>
  );
}

export default App;
