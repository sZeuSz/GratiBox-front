import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled, { keyframes } from "styled-components";
import PageLoading from "../../Shared/Loadings";
import { MessagePlan, Title } from "../Plans/PlansPageStyled";
import { ContainerMain } from "../SignUp/SignUpPageStyled";
import {AiOutlineArrowDown} from "react-icons/ai"
import UserContext from "../../Contexts/UserContext";
import { ButtonWhite } from "../Home/HomeStyled";
import { getPlanSignRequest } from "../../Services/GratiBox";
import dayjs from "dayjs";
import add from "date-fns/add";
import { nextThreeDates } from "../../Services/NextThreeDates";
export default function SubscribePlanPage() {
    const [data, setData] = useState(null);
    const { userData } = useContext(UserContext);
    const history = useHistory();

    if (!userData) {
        history.push('/');
    }

    const renderPlan = useCallback(() => {
        getPlanSignRequest(userData.token)
    .then((res) => {
                setData(res.data[0]);
      })
    .catch((error) => {
            console.log(error);
    });
  }, []);
    function imprime() {
        console.log(data);
        // console.log(data[0].plan);
        console.log(typeof(Array(data)));
    }
    useEffect(() => {
        renderPlan();
    }, [renderPlan, userData]);

    return (
        <>
            {!userData || !data ? <PageLoading /> :
                <ContainerMainP>
                    <Title>Bom te ver por aqui @{userData.name}.</Title>
                    <MessagePlan>"Agradecer é arte de atrair coisas boas"</MessagePlan>
                    <p></p>
                    <ContainerSign>
                        <Figure>
                            <ImageSignPlan src="https://s3-alpha-sig.figma.com/img/0252/513e/5b6008e549096b70ec7d6254ebb06abc?Expires=1638144000&Signature=Zjyk59fo0ZPmZvT9oyDoccxe-2xAmERjf9ggdRsZU122I1gyAokOt7wol2tYVWUB-ftDhxPGiGkxgQlzbo61X9EG~Oi3k4pEHHK4WBmTaqhQDib51~H70Tx8sqSKjT-1r0GBHJ8GYCkx8nFljHC0Jg1zSNaTZna1lerFJt68SeTet8JBnWrjzAPUUqx2WKpx4H3n2LzZo4ZblrNuBjnw-MAO~V~zSven2Z2ql76f2NkNbsh1SL-gLwKLS1N3BpdVPVwH6GR1M4VKQgrkRcBprfAwA2MxDojgLg8qBzgEYfKjSdwGnY~zlo2vhpk7xxlH2qmyyL1SnY6i40GNqpGONQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        </Figure>
                        <Square>
                            <Name>Plan: <span>{ data.plan.type }</span></Name>
                            <Name>Signature Date: <span>{dayjs(data.plan.date).format('DD/MM/YY')}</span></Name>
                            <Name>Upcoming deliveries.:
                                {nextThreeDates(data.plan.date, data.plan.day, data.plan.type)}
                                {/* {dayjs(data.plan.date).format('DD/MM/YYYY').split('/')[2] }
                                <p>
                                    {dayjs(add(new Date('2015', '10', 'Monday'), {
                                        months: 0,
                                        
                                    })).format('DD/MM/YYYY')}
                                </p> */}
                            </Name> 
                        </Square>
                    </ContainerSign>
                    <h1 onClick={() => imprime()}>clickame</h1>
                    <ButtonNext>Evaluate Delivery</ButtonNext>
                </ContainerMainP>
            }
        </>
    )
}
const Name = styled.h1`
    margin-left: 25px;
    color: #E63C80;
    margin: 25px 0px;
    p, span{
        font-weight: 700;
    }
`;

const Square = styled.div`
    width: 90%;
    height: auto;
    /* background-color: black; */
    margin: 0 auto;
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