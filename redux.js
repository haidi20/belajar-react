const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 22
}

//reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    if(action.type == 'ADD_AGE'){
        return{
            ...state,
            age: state.age + 1
        }
    }
    if(action.type == 'CHANGE_VALUE'){
       return{
           ...state,
           value: state.value + action.newValue
       } 
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

// dispatching action
store.dispatch({type: 'ADD_AGE', });
store.dispatch({type: 'CHANGE_VALUE', newValue: 12});
console.log(store.getState());


