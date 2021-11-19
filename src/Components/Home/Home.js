import { useHistory } from "react-router";
import { Button2rd, ButtonsContainer, ButtonWhite, GreetingMessage, Header, Main, Message } from "./HomeStyled";
export default function Home() {
    
    const history = useHistory();

    return (
        <Main>
            <Header>
            <GreetingMessage><span>Bem vindo ao GratiBox</span></GreetingMessage>
            <Message><span>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</span></Message>
            </Header>
            <ButtonsContainer>
            <ButtonWhite onClick={() => history.push('/sign-up')}>Quero começar</ButtonWhite>
            <Button2rd onClick={() => history.push('/sign-in')}>Já sou grato</Button2rd>
            </ButtonsContainer>
        </Main>
    )
}