
const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM':
            console.log(`Our items are:`, action.payload);
            return action.payload;
        // case 'DELETE_PRODUCT':
        //     return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default itemReducer;
