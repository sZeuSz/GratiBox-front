import { useState } from "react";
import { useHistory } from "react-router";
import { postSignUpRequest } from "../../Services/GratiBox";
import { LoadSpin } from "../../Shared/Loadings";
import { ButtonRedirect, ButtonSubmit, ContainerButtons, ContainerMain, Form, Input, Message1 } from "./SignUpPageStyled";

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

        if (password !== confirmPassword) {
            setIsLoading(false);
            return;
        }

        postSignUpRequest({ name, email, password, confirmPassword })
            .then((res) => {
                history.push('/sign-in');
            })
            .catch((error) => {
            })
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
                pattern = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$"
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
                <ButtonRedirect disabled = {isLoading} onClick={() => history.push('/sign-in')}>Já sou grato</ButtonRedirect>
            </ContainerButtons>
            </Form>
        </ContainerMain>
    )
}