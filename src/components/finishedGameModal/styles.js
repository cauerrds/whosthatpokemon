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
        height: 360px;
        width: 300px ;
        padding: 10px 5px 10px 5px;
        margin-top: 80px;
        border: none;
        border-radius: 4px;
        background-color: #202123;
        display: flex;
        flex-direction: column;
        h1{
            font-size: 22px;
            text-align: center;
            color: #fefefe;
        }
`

export const GameStatus = styled.div`
        margin: auto;
        width: 100%;
        border: none;
        border-radius: 4px;
        display: flex;
`

export const PokemonList = styled.div`
        width: 150px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
`

export const GameResume = styled.div`
        width: 150px;
        display: flex;
        flex-direction: column;
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
