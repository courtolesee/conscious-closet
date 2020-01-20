const closetReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLOSET':
        return action.payload;
      case 'UNSET_CLOSET':
        return [];
      default:
        return state;
    }
  };
  
  export default closetReducer;