import houseReducer from './slices/HouseSlice';
import wizardReducer from './slices/WizardSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    house: houseReducer,
    wizard: wizardReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;