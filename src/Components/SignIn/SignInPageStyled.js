import styled from "styled-components";
import { Button2rd, ButtonWhite, Message } from "../Home/HomeStyled";

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
`;
const ContainerMain = styled.div`
    background-color: #6D7CE4;
    width: 100vw;
    height: 100vh;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    background-color: #6D7CE4;
`;

const Input = styled.input`
    width: 90%;
    max-width: 90%;
    height: 64px; 
    margin: 11px auto;
    border-radius: 10px;
    border: 1px solid #604848;
    padding-left: 14px;
    font-weight: 500;
    font-style: normal;
    font-size: 25px;

    &::placeholder{
        font-weight: 500;
        font-style: normal;
        font-size: 25px;
        color: #60484866;
    }

`;

const ButtonSubmit = styled(ButtonWhite)`
    color: white;
    width: 60%;
    height: 50px;
    margin: 30px auto;

    .LoadSpin {
        margin: 0 auto;
    }
`;

const Message1 = styled(Message)`
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    margin-bottom: 50px;
`;

const ButtonRedirect = styled(Button2rd)`
    color: white;
    background-color: initial;
`;

export {
    ContainerButtons,
    ContainerMain,
    Form,
    Input,
    ButtonRedirect,
    ButtonSubmit,
    Message1
}