import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <Router>
        <PageWrapper>
          <Route 
              path="/home" 
              component={Home}
            />
        </PageWrapper>
      </Router>
      
    );
  }
}

export default App;
