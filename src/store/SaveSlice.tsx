import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryType } from "../components/CountryList";

interface SaveState {
    saved: CountryType[]
}

const initialState: SaveState = {
    saved: []
}
const SaveSlice = createSlice({
    name: "Save",
    initialState,
    reducers: {
        createSave: (state, action: PayloadAction<CountryType>): any => {
            const data = state.saved.some(item => item.name === action.payload.name);

            if (data) {
                state.saved = state.saved.filter(item => item.name !== action.payload.name)
            }else{
                state.saved.push(action.payload);
            }
        }
    }
})

export const { createSave } = SaveSlice.actions
export default SaveSlice.reducer