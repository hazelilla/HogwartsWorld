import houseReducer from './slices/HouseSlice';
import wizardReducer from './slices/WizardSlice';
import spellReducer from './slices/SpellSlice';
import ingredientReducer from './slices/IngredientSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    house: houseReducer,
    wizard: wizardReducer,
    spell: spellReducer,
    ingredient: ingredientReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;