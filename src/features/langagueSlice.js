
import { createSlice } from '@reduxjs/toolkit';



const storagedString = localStorage.getItem('@WhosThatPokemon:language');
const storegedLanguage = storagedString ? JSON.parse(storagedString) : "";

const initialState = {
    language: storegedLanguage,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        applyLanguage(state, action){
            state.language = action.payload
            localStorage.setItem('@WhosThatPokemon:language', JSON.stringify(action.payload))
        }
    }
},
);

export const { applyLanguage} = languageSlice.actions;
export default languageSlice.reducer;