import { createSlice } from "@reduxjs/toolkit";

interface SpellState {
    spells: any[];
}

const initialState: SpellState = {
    spells: [],
}

export const spellSlice = createSlice({
    name: 'spell',
    initialState,
    reducers: {
        setSpell: (state, action) => {
            state.spells = action.payload;
        }
    }
})

export const { setSpell } = spellSlice.actions
export const getSpell = (state: any) => state.spell.spells;
export default spellSlice.reducer;