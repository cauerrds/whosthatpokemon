import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    width: 150px;
    span{
        color: #fefefe;
        font-size: 14px;
        width: 100%;
    }
`

export const ContainerPokemon = styled.div`
    border: ${props => "2px solid " + props.borderColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    img {
        width: 50px;
        height: 50px;
    }
   
`

