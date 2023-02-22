import { configureStore } from '@reduxjs/toolkit'
import difficultyOptionSlice from '../features/difficultyOptionSlice'
import gameSlice from '../features/gameSlice'
import langagueSlice from '../features/langagueSlice'
import pokemonListSlice from '../features/pokemonListSlice'

export const store = configureStore({
  reducer: {
    difficultyOptions: difficultyOptionSlice,
    gameData: gameSlice,
    
    language: langagueSlice,
    pokemonsList: pokemonListSlice.reducer,
  },
})