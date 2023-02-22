
import { createSlice } from '@reduxjs/toolkit';


let difficultyOption = [
    {easy: "Charmander", medium:"Charmeleon", hard:"Charizard"},
    {easy: "Squirtle", medium:"Wartortle", hard:"Blastoise"},
    {easy: "Bulbasaur", medium:"Ivysaur", hard:"Venusaur"},
 ]

const initialState = {
    difficultyLayout: difficultyOption[Math.floor(Math.random() * difficultyOption.length)],
    difficulty: "unpicked"
};

const difficultyOptionSlice = createSlice({
    name: 'difficulty',
    initialState,
    reducers: {
        setDifficulty(state, action){
            state.difficulty = action.payload           
        }
    }
},
);

export const { setDifficulty } = difficultyOptionSlice.actions;
export default difficultyOptionSlice.reducer;