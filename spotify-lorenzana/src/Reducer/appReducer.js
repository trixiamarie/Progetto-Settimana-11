const reducers = (state = [], action) => {
    switch (action.type) {
      case 'ADDTOFAVOURITES': {
        if(state.find(x => x.title === action.payload.title)){
            return state
        } 
       return [...state, action.payload];
      }
      case 'REMOVE': {
            return  state.filter(f => f.title !== action.payload.title);
      }
  
      default:
        return state;
    }
  };
  
  export default reducers;