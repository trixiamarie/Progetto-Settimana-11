const songClickReducer = (state = [], action) => {
    switch (action.type) {
      case 'SONG_CLICK': {
       return action.payload;
      }
      default:
        return state;
    }
  };
  
  export default songClickReducer;