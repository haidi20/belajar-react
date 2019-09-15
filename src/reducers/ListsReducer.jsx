import {CONSTANTS} from '../actions';

let listID = 2;
let cardID = 2;

const initialState = [
    {
        title: 'Last Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created a static lsit and a static card",
            },
            {
                id: 1,
                text: "we used a mix between material UI React and sytled component "
            }
        ]
    },
    {
        title: 'This Episod',
        id: 1,
        cards: [
            {
                id: 0,
                text: "we will create out first reducer",
            },
            {
                id: 1,
                text: "and render many cards on out list with static data"
            },
            {
                id: 2,
                text: "we will also make some little changes i forgot in the last episod (link tags for roboto font and icons..)"
            },
            {
                id: 3,
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
                id: listID
            }
            listID += 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
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
        default: 
            return state;
    }
}

export default listsReducer;