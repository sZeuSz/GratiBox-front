import styled, { keyframes } from "styled-components";
import { MessagePlan, Title } from '../Plans/PlansPageStyled'
import { ContainerMain } from '../SignUp/SignUpPageStyled';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { useContext, useState } from "react";
import { ButtonWhite } from "../Home/HomeStyled";
import { useHistory } from "react-router";
import UserContext from "../../Contexts/UserContext";
import PlanContext from "../../Contexts/PlanContext";
import { removePlanData, storePlanData } from "../../Services/Plan";
import InputMask from "react-input-mask";
import States from "../States/States";
import { postPlanSignRequest } from "../../Services/GratiBox";
import { removeUserData } from "../../Services/Login";
import PageLoading from "../../Shared/Loadings";

export default function SubscribePlanPageNext() {

    
    const { userData, userOnline, setUserOnline} = useContext(UserContext);
    const {planData, setPlanData} = useContext(PlanContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [isLoading, setIsLoading] = useState('');
    const history = useHistory();

    if (!userData) {
        history.push('/');
    }
    
    function submitPlanSign(event) {
        setUserOnline(!userOnline)
        event.preventDefault();
        setIsLoading(true)
        storePlanData( { plan: planData['plan'], address: { name, address, cep, city, state } })
        postPlanSignRequest(userData.token, { plan: planData['plan'], address: { name, address, cep, city, state } })
        .then((res) => {
            setIsLoading(false);
            console.log(res)
            history.push('/details-plan')
        })
            .catch((error) => {
            console.log(error)
            setIsLoading(false);
            removePlanData();
            removeUserData();
            alert(error);
            history.push('/')
        });
        return;
    }

    return (
        <>
            {!userData ? <PageLoading /> :
            <ContainerMainP>
                <Title>Bom te ver por aqui @{userData.name}.</Title>
                <MessagePlan>"Agradecer é arte de atrair coisas boas"</MessagePlan>
                <p></p>
                <ContainerSign>
                    <Figure>
                        <ImageSignPlan src="https://s3-alpha-sig.figma.com/img/0252/513e/5b6008e549096b70ec7d6254ebb06abc?Expires=1638144000&Signature=Zjyk59fo0ZPmZvT9oyDoccxe-2xAmERjf9ggdRsZU122I1gyAokOt7wol2tYVWUB-ftDhxPGiGkxgQlzbo61X9EG~Oi3k4pEHHK4WBmTaqhQDib51~H70Tx8sqSKjT-1r0GBHJ8GYCkx8nFljHC0Jg1zSNaTZna1lerFJt68SeTet8JBnWrjzAPUUqx2WKpx4H3n2LzZo4ZblrNuBjnw-MAO~V~zSven2Z2ql76f2NkNbsh1SL-gLwKLS1N3BpdVPVwH6GR1M4VKQgrkRcBprfAwA2MxDojgLg8qBzgEYfKjSdwGnY~zlo2vhpk7xxlH2qmyyL1SnY6i40GNqpGONQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </Figure>
                    <Form onSubmit={submitPlanSign}>
                        <Input
                            placeholder="Full name"
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={isLoading}
                            title="Min Length 4"
                            minLength='4'
                            required
                        />
                        <Input
                            placeholder="Delivery address"
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            disabled={isLoading}
                            title="Min Length 4"
                            minLength='4'
                            required
                        />
                        <Input
                            mask="99999-999"
                            placeholder="CEP"
                            type="text"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                            disabled={isLoading}
                            pattern="[0-9]{5}-[0-9]{3}"
                            title="valid format 55555-555"
                            minLength='4'
                            required
                        />
                        <ContainerInput>
                            <Input
                                placeholder="City"
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                disabled={isLoading}
                                minLength='4'
                                required
                            />
                            <States setState={setState} state={state}/>
                        </ContainerInput>

                        <ButtonNext type="submit">Next</ButtonNext>
                    </Form>
                
                </ContainerSign>
                </ContainerMainP>
            }
        </>
    )
}
const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    @media(max-width: 1115px){
        width: 92.99%;
    }
    @media(max-width: 831px){
        width: 95.8%;
    }
    @media(max-width: 829px){
        width: 93.8%;
    }
    @media(max-width: 801px){
        width: 94.8%;
    }
    @media(max-width: 538px){
        width: 96.8%;
    }
    @media(max-width: 447px){
        width: 97%;
    }
    @media(max-width: 447px){
        width: 98%;
    }
    @media(max-width: 315px){
        width: 100%;
    }
`;
const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: auto;
`;
const Input = styled(InputMask)`
    height: 50px;
    width: 90%;
    margin: 15px auto 35px auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #E0D1ED9E;
    border: none;
    font-size: 25px;
    padding-left: 24px;
    font-weight: 700;
    margin: 0 auto;
    color: #4D65A8;
    outline: none;
    &::placeholder{
        opacity:1;
        z-index:5;
        color: #4D65A8;
        font-size: 18px;
    }

`;
const ContainerMainP = styled(ContainerMain)`
    display:flex;
    flex-direction: column;
    height: auto;
    width: auto;

`;

const aumentar = keyframes`
    0%{
        height: 0px;
    }
    100%{
        height: 50px;
    }
`;
const diminuir = keyframes`
    100%{
        height: 0px;
    }
    0%{
        height: 50px;
    }
`;

const ContainerSign = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 50%;
    height: auto;
    margin: 30px auto;
    padding-top: 30px;
    border-radius: 25px;
    
    @media(max-width: 1115px){
        width: 80%;
    }
    @media(max-width: 834px){
        width: 90%;
    }
`

const Figure = styled.figure`
    width: 61%;
    height: 61%;
    margin: 15px auto;
`;

const ImageSignPlan = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media(max-width: 824px){
        object-fit: contain;
    }
`;

const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    font-weight: 700;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #E0D1ED9E;
    margin: 0 auto;
    color: #4D65A8;
`;

const IconRow = styled(AiOutlineArrowDown)`
    width: 25px;
    height: 25px;
    margin-right: 25px;
    transform: rotateX(${({open}) => open ? '180deg' : '0deg'});
`;

const Name = styled.h1`
    margin-left: 25px;
`;

const Plans = styled.div`
    height:  ${({open}) => open ? '50px' : '0px'};
    width: 90%;
    margin: 0px auto 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #E0D1ED9E;
    animation: ${({ open }) => open ? aumentar : diminuir} ${({ open }) => open ? '0.3s' : '0.1s'};
    overflow: hidden;

    input[type='radio'] {
        box-sizing: border-box;
        appearance: none;
        background: white;
        outline: 2px solid #333;
        border: 3px solid white;
        width: 12px;
        height: 12px;
    }

    input[type='radio']:checked {
    background: #333;
    }

    @media(max-width: 400px) {
        flex-wrap:wrap;
    }
`;

const ContainerTwo = styled.div`
    margin: 0px 28px;
`;

const Plan = styled.input`
    margin: 0px 0px;
`;

const ButtonNext = styled(ButtonWhite)`
    width: 30%;
    height: 65px;
    margin: 0px auto 35px auto;
    color: white;
    
`;