export const songclick = (song) => {
    console.log(song)
    return{
    type: 'SONG_CLICK',
    payload: song
}
  };