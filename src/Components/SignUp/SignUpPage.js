import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LoadSpin } from "../../Shared/Loadings";
import { Button2rd, ButtonWhite, Message } from "../Home/HomeStyled";

export default function SignUpPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const history = useHistory();

    function signIn(event) {

        event.preventDefault();
        setIsLoading(true);
    }
    return (
        <ContainerMain>
            <Form onSubmit={signIn}>
            <Message1>Bem vindo ao GratiBox</Message1>
            <Input
                placeholder = "name"
                type = "text"
                value = {name}
                onChange = { e => setName(e.target.value)}
                disabled = {isLoading}
                minLength= "3"
                required                 
                />
            <Input
                placeholder = "E-mail"
                type = "email"
                value = {email}
                onChange = { e => setEmail(e.target.value)}
                disabled = {isLoading}
                pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$"
                required                 
                />
            <Input
                placeholder = "Password"
                type = "password"
                value = {password}
                onChange = { e => setPassword(e.target.value)}
                disabled = {isLoading}
                minLength = "4"
                required                 
                />
            <Input
                placeholder = "Confirm password"
                type = "password"
                value = {confirmPassword}
                onChange = { e => setConfirmPassword(e.target.value)}
                disabled = {isLoading}
                minLength = "4"
                required                 
                />
            <ContainerButtons>
                <ButtonSubmit type="submit">{isLoading ? LoadSpin : "Cadastrar"}</ButtonSubmit>
                <ButtonRedirect disabled = {isLoading} onClick={() => history.push('sign-up/')}>Já sou grato</ButtonRedirect>
            </ContainerButtons>
            </Form>
        </ContainerMain>
    )
}

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