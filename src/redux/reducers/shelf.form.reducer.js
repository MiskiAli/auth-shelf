const shelfFormReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log(`Our items are:`, action.payload);
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default shelfFormReducer;
