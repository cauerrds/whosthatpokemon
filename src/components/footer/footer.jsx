import { useSelector } from "react-redux";
import { Container } from "./styles";

const Footer = ()=> {
    const language = useSelector((state) => state.language.language)


    let apresentationText = "Developed by:"
    if(language == "PT/BR"){
        apresentationText = "Desenvolvido por:"
    }
    return(
        <Container>
            <span>{`${apresentationText} Cauê R. Santos   `}</span>
            <span><a href="https://github.com/cauerrds" target="_blank">{`@GitHub   `}</a></span>
            <span><a href="https://www.linkedin.com/in/cau%C3%AA-rafael-rodrigues-dos-santos-3b7a84157" target="_blank">@Linkedin</a></span>
        </Container>
    )
}

export {Footer}