import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    background-color: #202123;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);


    display: flex;
    align-items: center;
    padding-left: 10px;


    span{
        font-size: 22px;
        color: #fefefe;
    }
    @media (min-width: 768px) {
        padding-left: 100px;
    }
`