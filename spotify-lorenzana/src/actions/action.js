export const addtofavourites = (song) => {
    return{
    type: 'ADDTOFAVOURITES',
    payload: song
}
  };

export const remove =  (song) =>{
    return{
        type: 'REMOVE',
        payload: song
    }
}