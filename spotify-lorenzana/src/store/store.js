import { combineReducers, createStore } from 'redux';
import reducers from '../Reducer/appReducer';



const combinazioneReducers = combineReducers({
    reducer: reducers,
    
})

const store = createStore(combinazioneReducers);


export default store;