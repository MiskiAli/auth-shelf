const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEM':
        return action.payload;
      case 'DELETE_ITEM':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default itemReducer;
  