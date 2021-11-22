import styled from "styled-components";
import { ButtonWhite, Message } from "../Home/HomeStyled";

const Title = styled.div`
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    color: #ffffff;
    text-align: center;
    margin: 30px 0px;
`;

const MessagePlan = styled(Message)`
    font-weight: 300;
    font-style: normal;
    font-size: 26px;
    color: #ffffff;
    text-align: center;

    @media(max-width: 280px){
        font-size: 18px;
    }
`;

const ImagePlan = styled.img`
    width: 100%;
    height: 75%;
    object-fit: fill;
    border-radius: 25px;
`;

const Figure = styled.figure`
    position: relative;
    width: 45%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    background-color: #E5CDB3;
    margin: 30px auto;
    border-radius: 25px;

    @media(max-width: 834px){
        height: 100%;
        min-height: auto;
        width: 100%;
        position: static !important;
        flex-direction: column;
        justify-content: initial;
    }
`;

const ContainerPlans = styled.div`
    display: flex;
    width: 100%;
    height: 91%;
    margin: 0 auto;
    @media(max-width: 834px){
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 90vw;
    }
`;

const Description = styled.h1`
    position: absolute;
    bottom: 95px;
    left: 25px;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: #4D65A8;
    width: 71%;

    @media(max-width: 834px){
        width: auto;
        position: static !important;
        width: 41%;
        margin-left: 40px;
    }
    @media(max-width: 540px){
        margin-left: 18px;
    }
    @media(max-width: 280px){
        margin-left: 10px;
    }
`;

const ButtonSubscribe = styled(ButtonWhite)`
    position: absolute;
    bottom: 20px;
    left: 36%;
    color: #ffffff;
    width: 30%;
    height: 50px;

    @media(max-width: 834px){
        width: 40%;
        position: static !important;
        padding: 15px auto;
        margin: 30px auto;
    }

    @media(max-width: 262px){
        width: 100%;
    }
`;

export {
    Title,
    MessagePlan,
    ImagePlan,
    Figure,
    ContainerPlans,
    Description,
    ButtonSubscribe,
}