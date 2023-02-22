import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "../../features/difficultyOptionSlice";
import { Container, DifficultButton } from "./styles";
import { BsInfoCircle } from "react-icons/bs"

const DifficultyModal = ()=>{
    const language = useSelector((state) => state.language.language)
    const difficultyOptions = useSelector((state) => state.difficultyOptions.difficultyLayout)
    const difficulty = useSelector((state) => state.difficultyOptions.difficulty)

    const dispatch = useDispatch()

    let difficultyTitle = "Difficulty:"
    let easyInfo = "When playing on easy mode, wherever you type some chars at a different order or maybe a wrong one, the game will validate your percentual of rights, case is above 70% you will get graded acordly."
    let mediumInfo = "When playing on medium mode, wherever you type some chars at a different order or maybe a wrong one, the game will validate your percentual of rights, case is above 75% you will get graded acordly."
    let hardInfo = "When playing on hard mode, the game will only grade you when type the Pokemon's name correctly."

 
    let difficultyModal = null
    if(language == "PT/BR"){
        difficultyTitle = "Dificuldade:"
        easyInfo = "Ao jogar no modo fácil, sempre que você digitar alguns caracteres em uma ordem diferente ou talvez errada, o jogo validará seu percentual de acertos, caso seja acima de 70% você será avaliado de acordo."
        mediumInfo = "Ao jogar no modo médio, sempre que você digitar alguns caracteres em uma ordem diferente ou talvez errada, o jogo validará seu percentual de acertos, caso seja acima de 75% você será classificado de acordo."
        hardInfo = "Ao jogar no modo difícil, o jogo só vai te dar nota quando digitar o nome do pokémon corretamente."

    }

    const setDifficultyOnClick = (selectedDifficulty)=>{
        dispatch(setDifficulty(selectedDifficulty))
        let input = document.getElementById("gameInput").focus()
    }

    if(language && difficulty == "unpicked"){
        difficultyModal = (        
            <Container>
                <div>
                    <h1>{difficultyTitle}</h1>
                    <DifficultButton onClick={()=> setDifficultyOnClick("easy")}>
                        <span>{difficultyOptions.easy}</span>
                        <BsInfoCircle title={easyInfo}/>
                    </DifficultButton>
                    <DifficultButton onClick={()=> setDifficultyOnClick("medium")}>
                        <span>{difficultyOptions.medium}</span>
                        <BsInfoCircle title={mediumInfo}/>
                    </DifficultButton>
                    <DifficultButton onClick={()=> setDifficultyOnClick("hard")}>
                        <span>{difficultyOptions.hard}</span>
                        <BsInfoCircle title={hardInfo}/>
                    </DifficultButton>
                </div>
            </Container>
        )
    }
    return difficultyModal
}

export {DifficultyModal}