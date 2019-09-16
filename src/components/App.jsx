import React, {Component} from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import {sort} from '../actions';

class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId} = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }

  render(){
    const {lists} = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <h2>Hello World</h2>
        <div style={styles.listContainer}>
          {
            lists.map((list) =>
              <TrelloList 
                listID={list.id}
                title={list.title}  
                cards={list.cards}
                key={list.id} />
            )
          }
          <TrelloActionButton list />
        </div>
      </div>
      </DragDropContext>
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
