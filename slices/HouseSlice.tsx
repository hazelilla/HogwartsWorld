import { createSlice } from "@reduxjs/toolkit";

interface HouseState {
    houses: any[];
}

const initialState: HouseState = {
    houses: [],
}

export const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        setHouses: (state, action) => {
            state.houses = action.payload;
        }
    }
})

export const { setHouses } = houseSlice.actions
export const getHouses = (state: any) => state.house.houses;
export default houseSlice.reducer;