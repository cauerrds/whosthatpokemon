import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/gameSlice"
import { PokemonCard } from "../pokemonCard/pokemonCard";
import { Container, Content, GameResume, PokemonList, GameStatus, StyledButton } from "./styles";

const FinishedGameModal = ({setFinishedGame})=>{

    const gameData = useSelector((state)=> state.gameData)
    const language = useSelector((state) => state.language.language)

    const dispatch = useDispatch()

    const getListedPokemons = (pokemonList)=>{
        const cardlist = pokemonList.map((pokemon, i)=>{
            const firstChar = pokemon.name[0].toUpperCase()
            const name = pokemon.name.substring(1)
            const pokemonName = firstChar + name
            return (
                <PokemonCard key={i} name={pokemonName} img={pokemon.img} points={pokemon.points}/>
            )
        })
        return cardlist
    }

    const handlePlayeAgain = ()=>{
        dispatch(reset())
        setFinishedGame(false)
    }

    let result = "Result"
    let hits = "Hits:"
    let grade = "Points:"
    let playAgain = "Play Again"
    if(language == "PT/BR"){
         hits = "Acertos:"
         grade = "Nota:"
         result = "Resultado"
         playAgain = "Jogar novamente"
    }


    return (
        <Container>
            <Content>
                <h1>{result}</h1>
                <GameStatus>
                    <PokemonList>
                        {getListedPokemons(gameData.previousPokemons)}
                    </PokemonList>
                    <GameResume>
                        <div>
                            <h1>{hits}</h1>
                            <h1>{gameData.correctAnswers}</h1>
                        </div>
                        <div>
                            <h1>{grade}</h1>
                            <h1>{gameData.points}</h1>
                        </div>
                    </GameResume>
                </GameStatus>
                <StyledButton onClick={handlePlayeAgain}>{playAgain}</StyledButton>
            </Content>    
        </Container>
    )
}

export {FinishedGameModal}