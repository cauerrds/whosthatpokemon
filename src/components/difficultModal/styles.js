import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: rgb(0, 0, 0, 0.6);

    div {
    margin: auto;
    width: 180px ;
    padding: 10px 5px 10px 5px;
    margin-top: 150px;
    border: none;
    border-radius: 4px;
    background-color: #202123;
    
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    justify-content: center;
    align-items: center;
        
        h1{
            font-size: 18px;
            color: #fefefe;  
        }
    }

`

export const DifficultButton = styled.button`
    width: 150px;
    height: 40px;
    text-align: center;
    border: 1px solid #4C4D4F;
    border-radius: 4px;
    background-color: #343541;
    color: white; 
    display: flex;
    align-items: center;
    :hover{
        cursor: pointer;
        border: 2px solid #fefefe;
    }
    span{
        flex-grow: 1;
    }

    svg{
        :hover{
            cursor: help;
        }
    }

`