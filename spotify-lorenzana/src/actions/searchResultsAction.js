export const searchterm = (searchTerm) => {
    console.log(searchTerm)
    return{
    type: 'SEARCH_RESULT',
    payload: searchTerm
}
  };

export const removesearch =  (searchTerm) =>{
    return{
        type: 'REMOVE_RESULTS',
        payload: searchTerm
    }
}