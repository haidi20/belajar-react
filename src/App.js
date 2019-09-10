import React, {Component} from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state({
      current: 0,
      previous: []
    })
  }

  render(){
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current}></input>
      </div>
    );
  }
}

export default App;
