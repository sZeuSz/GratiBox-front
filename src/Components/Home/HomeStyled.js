import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-image: url('https://s3-alpha-sig.figma.com/img/967d/e33a/b05d10f777c89195bbf73274ad3c291b?Expires=1638144000&Signature=D6qdQ-3-DYa2LWawrUDT87GKk6F~97olSlNuhEZdjZfL2DtmNzY8BJHlW3IOOAM-kdFX2e0IYaPt4EWpHIT2FnlujbPJue4GjbfADtZ4Je5V1VPYPwwzf9LG9KiRhb4rOy-IjOIzWIn7fZ-FXhCvHwe19uYKvyaiHEai3X0vAm1YQnvOckCcuH4QMaIVFuBRDEFOHqyUScQSSZ2tnJImGsOifZ-173WzT2OqB4gkYVT7B1btXQYbpPS7jJlcaDcUvuaL08ka7A5IIixscIL7rW-4W2ht5Q2TAskOaBEuGC-JYZ72dK2aGjBZH-D9hWwIJ~H0wx67VkKLbRnScpKA4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 0;
    object-fit: cover;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Message = styled.div`
    width: 80%;
    font-weight: 300;
    font-size: 50px;
    text-align: center;
    margin: 1rem auto;
    color: #FFFFFf;

`;

export const GreetingMessage = styled.div`
    font-weight: 700;
    font-size: 80px;
    margin: 6rem auto;
    color: #FFFFFf;
`;

export const ButtonWhite = styled.button`
    height: 80px;
    width: 40%;
    background-color: #8C97EA;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    color: #FFFFFf;
    margin: 25px auto;
    border-radius: 25px;
`;

export const Button2rd = styled.button`
    height: 80px;
    width: 40%;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    margin: 25px auto;
    background-color: inherit;
    color: #FFFFFf;
    border-radius: 25px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 30%;
    background-color: #4D65A8;
`;