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
        id: 0,
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
            }
        ]
    },
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default listsReducer;