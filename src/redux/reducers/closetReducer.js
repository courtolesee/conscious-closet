const closetReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLOSET':
        console.log('CLOSET REDUCER ACTION PAYLOAD IS:', action.payload);
        return action.payload;
      case 'UNSET_CLOSET':
        return [];
      default:
        return state;
    }
  };
  
  export default closetReducer;