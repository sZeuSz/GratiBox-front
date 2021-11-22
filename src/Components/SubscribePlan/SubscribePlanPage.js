import styled, { keyframes } from "styled-components";
import { MessagePlan, Title } from '../Plans/PlansPageStyled'
import { ContainerMain } from '../SignUp/SignUpPageStyled';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { useContext, useState } from "react";
import { ButtonWhite } from "../Home/HomeStyled";
import { useHistory } from "react-router";
import UserContext from "../../Contexts/UserContext";
import { storePlanData } from "../../Services/Plan";
import PageLoading from "../../Shared/Loadings";
export default function SubscribePlanPage() {   

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedDeliveryDay, setSelectedDeliveryDay] = useState(null);
    const [items, setItems] = useState('');
    const { userData } = useContext(UserContext);
    const history = useHistory();

    if (!userData) {
        history.push('/');
    }
    
    function onChangeValue(event) {
        if (event.target.value === 'Weekly' || event.target.value === 'Monthly') {
            setSelectedPlan(event.target.value);
            setSelectedDeliveryDay(null);
        }
        else if (event.target.value[0] === 'M' || event.target.value[0] === 'D' || event.target.value[0] === 'W' || event.target.value[0] === 'F'){
            setSelectedDeliveryDay(event.target.value);
        }
        return;
    }

    function onChangeItems(event) {
        if (items?.includes(event.target.value)) {
            setItems(items.filter((item) => item !== event.target.value))
        }
        else {
            setItems([...items, event.target.value]);   
        }
        return;
    }

    function submitToNext() {
        if (!selectedPlan || !selectedDeliveryDay || !items.length) {
            alert("por favor, preecha todos os campos");
            return;
        }

        storePlanData({ plan: { type: selectedPlan, day: selectedDeliveryDay, items } })
        
        history.push('/subscribe-plan/next');
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
                        <InputDiv >
                            <Name>Plano</Name>
                            <IconRow open={isOpen} onClick={() => { setIsOpen(!isOpen) }} />
                        </InputDiv>
                
                        <Plans open={isOpen} onChange={onChangeValue}>
                            <ContainerTwo><Plan type="radio" value="Weekly" name="selectedPlan" /> Weekly</ContainerTwo>
                            <ContainerTwo><Plan type="radio" value="Monthly" name="selectedPlan" /> Monthly</ContainerTwo>
                        </Plans>
                        <InputDiv>
                            <Name>Entrega</Name>
                            <IconRow open={isOpenTwo} onClick={() => { setIsOpenTwo(!isOpenTwo) }} />
                        </InputDiv>
                        {selectedPlan && selectedPlan === 'Monthly' ?
                            <Plans open={isOpenTwo} onChange={onChangeValue}>
                                <ContainerTwo><Plan type="radio" value="Dia 01" name="selectedDeliveryDay" /> Dia 01</ContainerTwo>
                                <ContainerTwo><Plan type="radio" value="Dia 10" name="selectedDeliveryDay" /> Dia 10</ContainerTwo>
                                <ContainerTwo><Plan type="radio" value="Dia 20" name="selectedDeliveryDay" /> Dia 20</ContainerTwo>
                            </Plans> : <Plans open={isOpenTwo} onChange={onChangeValue}>
                                <ContainerTwo><Plan type="radio" value="Monday" name="selectedDeliveryDay" /> Monday</ContainerTwo>
                                <ContainerTwo><Plan type="radio" value="Wednesday" name="selectedDeliveryDay" /> Wednesday</ContainerTwo>
                                <ContainerTwo><Plan type="radio" value="Friday" name="selectedDeliveryDay" /> Friday</ContainerTwo>
                            </Plans>
                        }
                        <InputDiv>
                            <Name>Quero receber</Name>
                            <IconRow open={isOpenThree} onClick={() => {setIsOpenThree(!isOpenThree) }} />
                        </InputDiv>

                        <Plans open={isOpenThree} onChange={onChangeValue}>
                            <ContainerTwo><Plan type="checkbox" value="Chás" name="items" onChange={onChangeItems} /> Chás</ContainerTwo>
                            <ContainerTwo><Plan type="checkbox" value="Incensos" name="items" onChange={onChangeItems} /> Incensos</ContainerTwo>
                            <ContainerTwo><Plan type="checkbox" value="Produtos organicos" name="items" onChange={onChangeItems} /> Produtos organicos</ContainerTwo>
                        </Plans>
                    </ContainerSign>
                    <ButtonNext onClick={() => submitToNext()}>Next</ButtonNext>
                </ContainerMainP>
            }
            </>
    )
}

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