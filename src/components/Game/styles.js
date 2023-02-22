import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70vh;
    align-items: center;
    gap: 15px;


`

export const ContainerImg = styled.div`
        border: 2px solid #4C4D4F;
        border-radius:50% ;
        width: 300px;
        height: 300px;

        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 280px;
            height: 280px;
            filter: brightness(0);
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }

`


export const StyledInput = styled.div`
    text-align: left;
    width: 300px;

    .inputContainer{
        background: #DDF2FF;
        border-radius: 4px;
        border: 2px solid #DDF2FF;
        color: black;
        width: 100%;
        display: flex;
        align-items: center;
            &:focus-within {
                border: 2px solid #070707;
            }
        input {  
        font-weight: 600;
        outline: none;
        width: 100%;
        height: 40px;
        padding-left: 5px;
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: #4C4D4F;
            &::placeholder {
            color: #4C4D4F;
            font-size: 0.8rem;
            }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            -webkit-text-fill-color: #fefefe;
            transition: background-color 86400s;
        }

        svg {
            width: 20px;
            height: 20px;
            color: #4C4D4F;

        }

        button{
            height: 100%;
            background-color: transparent;
            border: none;
            padding: 10px;
            cursor: pointer;

            :hover{
                opacity: 0.5;
                background-color: #fefefe;         
            }
        }
    }
`