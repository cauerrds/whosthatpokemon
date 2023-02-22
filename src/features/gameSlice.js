
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    previousIds: [],
    previousPokemons: [],
    points: 0,
    round: 1,
    correctAnswers: 0
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        saveGameData(state, action){
            state.previousIds.push(action.payload.pokemonId)
            state.points += action.payload.points
            state.round = state.round + 1
            state.previousPokemons.push(action.payload.pokemon)
            console.log(action.payload.points);
            const isCorrectAnswer = action.payload.points > 0
            if(isCorrectAnswer){
                state.correctAnswers ++
            }

        },
        reset: () => initialState
    }
},
);

export const { saveGameData, reset } = gameSlice.actions;
export default gameSlice.reducer;