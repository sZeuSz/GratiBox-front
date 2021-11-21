import { useState } from "react";
import { useHistory } from "react-router";
import { LoadSpin } from "../../Shared/Loadings";
import { ButtonRedirect, ButtonSubmit, ContainerButtons, ContainerMain, Form, Input, Message1 } from "./SignInPageStyled";

export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <ContainerButtons>
                <ButtonSubmit type="submit">{isLoading ? LoadSpin : "Login"}</ButtonSubmit>
                <ButtonRedirect disabled = {isLoading} onClick={() => history.push('sign-up/')}>Ainda não sou grato</ButtonRedirect>
            </ContainerButtons>
            </Form>
        </ContainerMain>
    )
}