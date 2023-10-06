import { createSlice } from "@reduxjs/toolkit";

interface IngredientState {
    ingredients: any[];
}

const initialState: IngredientState = {
    ingredients: [],
}

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        setIngredient: (state, action) => {
            state.ingredients = action.payload;
        }
    }
})

export const { setIngredient } = ingredientSlice.actions
export const getIngredients = (state: any) => state.ingredient.ingredients;
export default ingredientSlice.reducer;