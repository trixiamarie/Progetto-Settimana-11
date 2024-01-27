const searchResultsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_RESULT': {
        console.log(action);
       return [...state, action.payload];
      }
      case 'REMOVE_RESULTS': {
            return  state.filter(f => f !== action.payload);
      }
  
      default:
        return state;
    }
  };
  
  export default searchResultsReducer;