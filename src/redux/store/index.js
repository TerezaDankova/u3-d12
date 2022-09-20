import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import jobsSearchReducer from "../reducers/jobsSearch";

import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root", // "root" - if you want to make the whole Redux store persist
  storage: localStorage,
}

const bigReducer = combineReducers ({
  favourites: favouritesReducer,
  jobs: jobsSearchReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
 
});

export const persistor = persistStore(store);

export default store;