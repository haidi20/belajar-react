import {CONSTANTS} from '../actions';

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: 'Last Episode',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "we created a static lsit and a static card",
            },
            {
                id: `card-${1}`,
                text: "we used a mix between material UI React and sytled component "
            }
        ]
    },
    {
        title: 'This Episod',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "we will create out first reducer",
            },
            {
                id: `card-${3}`,
                text: "and render many cards on out list with static data"
            },
            {
                id: `card-${4}`,
                text: "we will also make some little changes i forgot in the last episod (link tags for roboto font and icons..)"
            },
            {
                id: `card-${5}`,
                text: "we will also make some little changes i forgot in the last episod (link tags for roboto font and icons..)"
            }
        ]
    },
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD:{
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1;
            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return {
                        ...list, 
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            });

            return newState;
        }
        
        case CONSTANTS.DRAG_HAPPENED:
            const { 
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
             } = action.payload;
            const newState = [...state];

            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;

        default: 
            return state;
    }
}

export default listsReducer;