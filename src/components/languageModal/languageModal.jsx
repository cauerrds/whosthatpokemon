import { useDispatch, useSelector } from "react-redux";
import { applyLanguage } from "../../features/langagueSlice";
import { Container, LanguageDiv  } from "./styles";

const LangaugeModal = ()=>{

    const language = useSelector((state) => state.language.language)
    const dispatch = useDispatch();

    const PortugueseButton = ()=>{   
        dispatch(applyLanguage("PT/BR"))
    }
    const EnglishButton = ()=>{   
        dispatch(applyLanguage("EN/US"))
    }

    let dialog = null
    if(!language){
        dialog = (
            <Container >
                <div>
                    <LanguageDiv onClick={()=> PortugueseButton()}>Português</LanguageDiv>
                    <LanguageDiv onClick={()=> EnglishButton()}>English</LanguageDiv>
                </div>
            </Container>
        )
    } 
    return (
        dialog
    )

}

export {LangaugeModal}