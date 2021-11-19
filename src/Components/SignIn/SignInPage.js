import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ContainerPage from "../../Shared/Container";
import Form from "../../Shared/Form";
import Input from "../../Shared/Input";
import { Button2rd, ButtonWhite } from "../Home/HomeStyled";

export default function SignInPage () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    function signIn (e) {

        setIsLoading(true);
        setIsLoading(false);
    }
    return (
        <ContainerPage>
            <Form onSubmit={signIn}>
                <ContainerHeader>
                <h1>Bem vindo ao GratiBox</h1>   
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
                    placeholder = "Senha"
                    type = "password"
                    value = {password}
                    onChange = { e => setPassword(e.target.value)}
                    disabled = {isLoading}
                    minLength = "4"
                    required                  
                />
                </ContainerHeader>
                <ContainerButtons>
                    <ButtonLogin type="submit">Login</ButtonLogin>
                    <Button onClick={() => history.push('/sign-up')}>Ainda não sou grato</Button>
                </ContainerButtons>
            </Form>
            
        </ContainerPage>
    );
}

const ContainerHeader = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;
const ButtonLogin = styled(ButtonWhite)`
    width:100%;
`;
const Button = styled(Button2rd)`
    width: 100%;
`;
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #6D7CE4;
`;