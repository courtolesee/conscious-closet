const editItemCardReducer = (state = [], action) => {
    if(action.type === 'SEND_UPDATE'){
        return [...state, action.payload]
    }
    return state;
  };
  
  export default editItemCardReducer;