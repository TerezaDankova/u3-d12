import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import jobsSearchReducer from "../reducers/jobsSearch";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root", // put "root" here if you want to make the whole Redux store persist
  storage,
}

const bigReducer = combineReducers ({
  favourites: favouritesReducer,
  jobs: jobsSearchReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

const store = configureStore({
  reducer: persistedReducer,
 
});

const persistor = persistStore(store);

export { store, persistor };
