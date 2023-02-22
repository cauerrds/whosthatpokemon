import { Container, ContainerImg, StyledInput } from "./styles"
import {MdSend} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonData } from "../../features/pokemonListSlice"
import { saveGameData } from "../../features/gameSlice"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FinishedGameModal } from "../finishedGameModal/finishedGameModal"



const Game = ()=>{

    const [finishedGame, setFinishedGame] = useState(false)

    const dispatch = useDispatch()       
    const {data, loading, isSuccess } = useSelector((state)=> state.pokemonsList)
    const gameData = useSelector((state)=> state.gameData)
    const difficulty = useSelector((state) => state.difficultyOptions.difficulty)
  
    
    const getRandomPokemon = (previousIds)=>{ 
        const randomId =  Math.floor(Math.random() * 150 + 1)
        const idWasUsed = previousIds.includes(randomId)
        if(idWasUsed){
            getRandomPokemon(previousIds)
        } else{
            dispatch(getPokemonData(randomId))
        }
    }

    const validateName = (typedPokemonName, hiddenPokemonName)=>{
        let similarity = 0;
        const nameLength = hiddenPokemonName.length;
        typedPokemonName = typedPokemonName.toLowerCase()
        hiddenPokemonName = hiddenPokemonName.toLowerCase()
        

        for (let i = 0; i < nameLength; i++) {
          if (typedPokemonName[i] === hiddenPokemonName[i]) {
            similarity++;
          }
        }     

        const typedPokemonNameLongerThatHiddenPokemonName = typedPokemonName > hiddenPokemonName
        if(typedPokemonNameLongerThatHiddenPokemonName){
            return (similarity / typedPokemonName.length).toFixed(2);
        }
        return (similarity / nameLength).toFixed(2);
    }

    const playGame = (difficulty, typedPokemonName, hiddenPokemonName, pokemonId)=>{

        const similarity = validateName(typedPokemonName, hiddenPokemonName)
        let points = similarity * 2

        const pokemon = {name: data.name, img: data.sprites.front_default, points: points}


        switch (difficulty) {
            case "easy":
                const similarityIsAbove70 = similarity > 0.70
                if (similarityIsAbove70) {
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                } else {
                    points = 0
                    pokemon.points = 0
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                }

                break;
            case "medium":
                const similarityIsAbove85 = similarity > 0.85
                if (similarityIsAbove85) {
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                } else {
                    points = 0
                    pokemon.points = 0
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                }
                break;
            default:
                const isSimiliar = similarity == 1
                if (isSimiliar) {
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                } else {
                    points = 0
                    pokemon.points = 0
                    dispatch(saveGameData({pokemonId, points, pokemon}))                    
                }
                break;
        }
    }

    const schema = yup.object().shape({
        pokemonName: yup
          .string().required() 
      });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitFnc= ({pokemonName})=>{
        const isRoundFive = gameData.round === 5
        if(isRoundFive){
            playGame(difficulty, pokemonName, data.name, data.id)
            reset()
            setFinishedGame(true)
        } else{
            playGame(difficulty, pokemonName, data.name, data.id)
            reset()
            getRandomPokemon(gameData.previousIds)
        }


    }


    useEffect(()=>{
       getRandomPokemon(gameData.previousIds)
    },[])

    let finishedGameModal = null
    if(finishedGame){
        finishedGameModal = (
            <FinishedGameModal setFinishedGame={setFinishedGame}/>
        )   
    } else {
        finishedGameModal = null
    }

    let renderPokemon = null
    if(isSuccess){
        renderPokemon = (    
            <img src={data.sprites.front_default}/>
        )
    }
    

    return(
        <Container>
            <ContainerImg>
                {renderPokemon}
            </ContainerImg>

            <StyledInput>
                <form onSubmit={handleSubmit(onSubmitFnc)}>
                    <div className="inputContainer">
                        <input  {...register("pokemonName")} name="pokemonName" placeholder="Pokémon's name"/>
                        <button  type="submit">< MdSend/></button>           
                    </div>
                </form>
            </StyledInput>
            {finishedGameModal}
        </Container>
    )
}

export {Game}