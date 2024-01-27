import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Fix: Import 'thunk' without curly braces
import storage from "redux-persist/lib/storage";
import reducers from "../Reducer/appReducer";
import searchResultsReducer from "../Reducer/searchResultsreducer";
import SongClickReducer from "../Reducer/SongClickReducer";


const initialState = {
  reducer: [],        
  searchresults: [],   
  songclick: [],       
};

const combinazioneReducers = combineReducers({
  reducer: reducers,
  searchresults: searchResultsReducer,
  songclick: SongClickReducer,
});

const persistentConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: "secret-secretissimo-key",
      onError: function (error) {
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistentConfig, combinazioneReducers);

export const store = createStore(
  persistedReducer,
  initialState, // Provide the initial state to the store
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
