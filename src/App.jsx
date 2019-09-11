import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';

class App extends Component {

  render(){
    return (
      <Router>
        <PageWrapper>
          <Route 
            exact={true}
            path="/home" 
            component={Home}
          />

          <Route
            path="/about"
            component={About}
          />

        </PageWrapper>
      </Router>
      
    );
  }
}

export default App;
