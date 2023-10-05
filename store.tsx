import houseReducer from './slices/HouseSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    house: houseReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;