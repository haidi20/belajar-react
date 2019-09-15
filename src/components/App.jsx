import React, {Component} from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render(){
    const {lists} = this.props;

    return (
      <div className="App">
        <h2>Hello World</h2>
        <div style={styles.listContainer}>
          {
            lists.map((list) =>
              <TrelloList 
                title={list.title}  
                cards={list.cards}
                key={list.id} />
            )
          }
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display:"flex",
    flexDirection: "row",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
