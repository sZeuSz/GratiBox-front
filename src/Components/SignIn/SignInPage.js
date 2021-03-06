import { useContext, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../../Contexts/UserContext";
import { postSignInRequest } from "../../Services/GratiBox";
import { storeUserDAta } from "../../Services/Login";
import { LoadSpin } from "../../Shared/Loadings";
import { ButtonRedirect, ButtonSubmit, ContainerButtons, ContainerMain, Form, Input, Message1 } from "./SignInPageStyled";

export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    
    const history = useHistory();

    function signIn(event) {

        event.preventDefault();
        setIsLoading(true);

        postSignInRequest({email, password})
        .then((res) => {
            setUserData(res.data);
            setIsLoading(false);
            storeUserDAta(res.data)
            history.push('/plans')
            // setUserOnline(!userOnline);
        })
        .catch((erro) => {
            setIsLoading(false);
            alert(erro);
        })
    };
    
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
            <ContainerButtons>
                <ButtonSubmit type="submit">{isLoading ? LoadSpin : "Login"}</ButtonSubmit>
                <ButtonRedirect disabled = {isLoading} onClick={() => history.push('sign-up/')}>Ainda n??o sou grato</ButtonRedirect>
            </ContainerButtons>
            </Form>
        </ContainerMain>
    )
}