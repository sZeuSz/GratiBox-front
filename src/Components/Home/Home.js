import { useHistory } from "react-router";
import styled from "styled-components";
import { Button2rd, ButtonsContainer, ButtonWhite, GreetingMessage, Header, Main, Message } from "./HomeStyled";
export default function Home() {
    
    const history = useHistory();

    return (
        <Main>
            <Header>
            <GreetingMessage><span>Bem vindo ao GratiBox</span></GreetingMessage>
            <Message><span>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</span></Message>
            </Header>
            <Image>alhoo</Image>
            <ButtonsContainer>
            <ButtonWhite onClick={() => history.push('/sign-up')}>Quero começar</ButtonWhite>
            <Button2rd onClick={() => history.push('/sign-in')}>Já sou grato</Button2rd>
            </ButtonsContainer>
        </Main>
    )
}

export const Image = styled.div`
    display: none;
    width: 100%;
    height: 250%;
    background-image: url('https://s3-alpha-sig.figma.com/img/967d/e33a/b05d10f777c89195bbf73274ad3c291b?Expires=1638144000&Signature=D6qdQ-3-DYa2LWawrUDT87GKk6F~97olSlNuhEZdjZfL2DtmNzY8BJHlW3IOOAM-kdFX2e0IYaPt4EWpHIT2FnlujbPJue4GjbfADtZ4Je5V1VPYPwwzf9LG9KiRhb4rOy-IjOIzWIn7fZ-FXhCvHwe19uYKvyaiHEai3X0vAm1YQnvOckCcuH4QMaIVFuBRDEFOHqyUScQSSZ2tnJImGsOifZ-173WzT2OqB4gkYVT7B1btXQYbpPS7jJlcaDcUvuaL08ka7A5IIixscIL7rW-4W2ht5Q2TAskOaBEuGC-JYZ72dK2aGjBZH-D9hWwIJ~H0wx67VkKLbRnScpKA4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: cover;

    @media(max-width: 834px){
        display: block;
    }
`;