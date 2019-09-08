import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from '../../../config/redux';

// pages
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
