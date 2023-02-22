import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "../../features/difficultyOptionSlice";
import { Container, DifficultButton } from "./styles";

const DifficultyModal = ()=>{
    const language = useSelector((state) => state.language.language)
    const difficultyOptions = useSelector((state) => state.difficultyOptions.difficultyLayout)
    const difficulty = useSelector((state) => state.difficultyOptions.difficulty)

    const dispatch = useDispatch()

    let difficultyTitle = "Difficulty:"
 
    let difficultyModal = null
    if(language == "PT/BR"){
        difficultyTitle = "Dificuldade:"
    }

    const setDifficultyOnClick = (selectedDifficulty)=>{
        dispatch(setDifficulty(selectedDifficulty))
    }

    if(language && difficulty == "unpicked"){
        difficultyModal = (        
            <Container>
                <div>
                    <h1>{difficultyTitle}</h1>
                    <DifficultButton onClick={()=> setDifficultyOnClick("easy")}>{difficultyOptions.easy}</DifficultButton>
                    <DifficultButton onClick={()=> setDifficultyOnClick("medium")}>{difficultyOptions.medium}</DifficultButton>
                    <DifficultButton onClick={()=> setDifficultyOnClick("hard")}>{difficultyOptions.hard}</DifficultButton>
                </div>
            </Container>
        )
    }
    return difficultyModal
}

export {DifficultyModal}