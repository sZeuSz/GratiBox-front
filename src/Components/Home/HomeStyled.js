import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-image: url('https://s3-alpha-sig.figma.com/img/967d/e33a/b05d10f777c89195bbf73274ad3c291b?Expires=1638144000&Signature=D6qdQ-3-DYa2LWawrUDT87GKk6F~97olSlNuhEZdjZfL2DtmNzY8BJHlW3IOOAM-kdFX2e0IYaPt4EWpHIT2FnlujbPJue4GjbfADtZ4Je5V1VPYPwwzf9LG9KiRhb4rOy-IjOIzWIn7fZ-FXhCvHwe19uYKvyaiHEai3X0vAm1YQnvOckCcuH4QMaIVFuBRDEFOHqyUScQSSZ2tnJImGsOifZ-173WzT2OqB4gkYVT7B1btXQYbpPS7jJlcaDcUvuaL08ka7A5IIixscIL7rW-4W2ht5Q2TAskOaBEuGC-JYZ72dK2aGjBZH-D9hWwIJ~H0wx67VkKLbRnScpKA4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-position: center;
    z-index: 0;

    @media(max-width: 834px){
        justify-content: center;
        height: 90vh;
        background-image: none;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 82%;
    height: 10%;
    justify-content: flex-start;
    padding-right: 50%;
    z-index: 5;
`;

export const Message = styled.div`
    font-size: 19px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
`;

export const GreetingMessage = styled.div`
    font-size: 35px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin: 17px 0px;
`;

export const ButtonWhite = styled.button`

    background-color: #8C97EA;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    color: inherit;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        cursor: pointer;
        filter: brightness(120%);
    }
`;

export const Button2rd = styled.button`
    background-color: #8C97EA;
    width: 144px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    color: inherit;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        cursor: pointer;
        filter: brightness(120%);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 640px;
    margin-bottom: 28px;
    bottom: 200px;
    background-color:black;
    color: #ffffff;
    z-index: 1;

    @media(max-width: 834px){
        color: blue;
        background-color: red;
    }
`;