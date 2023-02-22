import { Container, ContainerPokemon } from "./styles";

const PokemonCard = ({name, img, points})=>{

    return (
        <Container>
            <ContainerPokemon borderColor={points == 0? "red" : "green"}>
                <img src={img} alt={name} />
            </ContainerPokemon>
            <span>{name}</span>
        </Container>
    )
}

export {PokemonCard}