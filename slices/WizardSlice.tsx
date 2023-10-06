import { createSlice } from "@reduxjs/toolkit";

interface WizardState {
    wizards: any[];
}

const initialState: WizardState = {
    wizards: [],
}

export const wizardSlice = createSlice({
    name: 'wizard',
    initialState,
    reducers: {
        setWizards: (state, action) => {
            state.wizards = action.payload;
        }
    }
})

export const { setWizards } = wizardSlice.actions
export const getWizards = (state: any) => state.wizard.wizards;
export default wizardSlice.reducer;