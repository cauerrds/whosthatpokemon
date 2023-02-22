import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getPokemonData = createAsyncThunk(
    "id/getPokemonById",
    async (id)=>{
        try {
           const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
           return data
        } catch (err) {
            console.log(err)
        }
    }
    )

const pokemonListSlice = createSlice({
    name: 'pokemons',
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers : {
        [getPokemonData.pending] : (state) =>{
            state.loading = true;
        },
        [getPokemonData.fulfilled] : (state, {payload}) =>{
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getPokemonData.rejected] : (state, {payload}) =>{
            state.loading = false;
            state.isSuccess = false;
            state.message = payload;
        }
    }
     
})

export default pokemonListSlice;
