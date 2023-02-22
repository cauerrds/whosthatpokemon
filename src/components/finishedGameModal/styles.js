import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: rgb(0, 0, 0, 0.6);

`

export const Content = styled.div`
        
        margin: auto;
        width: 300px ;
        padding: 10px 5px 10px 5px;
        margin-top: 80px;
        border: 1px solid #fefefe;
        border-radius: 4px;
        background-color: #202123;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
        width: 500px;
         }
        h1{
            font-size: 22px;
            text-align: center;
            color: #fefefe;
            margin-bottom: 15px;
        }
`

export const GameStatus = styled.div`
        
        margin: auto;
        width: 100%;
        border: none;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
`

export const PokemonList = styled.div`

        
        .imgDiv{
                max-width: 250px;
        }
        .legend{
                position: absolute;
                top: -10px;
                background: transparent !important; 
                color: #fefefe ;
                opacity: 1 !important;
                
                @media (min-width: 768px) {
                        font-size: 18px !important;
                }

        }

       width: 100%;

`

export const GameResume = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;

        div{
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: space-around;
                align-items: center;
                gap: 10px;

                h1{
                        font-size: 18px;
                        color: #fefefe;
                }
        }
`


export const StyledButton = styled.button`
    width: 100%;
    margin: auto;
    max-width: 400px;
    height: 40px;
    margin-top: 5px;
    text-align: center;
    border: 1px solid #4C4D4F;
    border-radius: 4px;
    background-color: #343541;
    color: white; 

    :hover{
        cursor: pointer;
        border: 2px solid #fefefe;
    } 
`
