import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/gameSlice"
import { PokemonCard } from "../pokemonCard/pokemonCard";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
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
                <div key={i}>
                    <img src={pokemon.img} />
                    <div className="imgDiv" style={{  
                        backgroundImage: "url(" + pokemon.img + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                    </div>
                    <span className="legend">{pokemon.name}</span>
                </div>
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
                        <Carousel swipeScrollTolerance={15} showThumbs={false} showStatus={false} infiniteLoop={true} centerMode={true} centerSlidePercentage={50} emulateTouch={true}>
                             {getListedPokemons(gameData.previousPokemons)}
                        </Carousel>
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