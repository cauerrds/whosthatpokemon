import { useSelector } from "react-redux";
import { Container } from "./styles";

const Header = () =>{

    const language = useSelector((state) => state.language.language)

    let title = "Who's That Pokémon?"
    if(language == "PT/BR"){
        title = "Quem é esse Pokémon?"
    }
    

    return(
        <Container>
            <span>{title}</span>
        </Container>
    )

}

export {Header}