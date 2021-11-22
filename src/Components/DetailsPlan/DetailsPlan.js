import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import PageLoading from "../../Shared/Loadings";
import { MessagePlan, Title } from "../Plans/PlansPageStyled";
import { ContainerMain } from "../SignUp/SignUpPageStyled";
import UserContext from "../../Contexts/UserContext";
import { ButtonWhite } from "../Home/HomeStyled";
import { getPlanSignRequest } from "../../Services/GratiBox";
import dayjs from "dayjs";
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
    });
  }, []);
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
                            </Name> 
                        </Square>
                    </ContainerSign>
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
const ButtonNext = styled(ButtonWhite)`
    width: 30%;
    height: 65px;
    margin: 0px auto 35px auto;
    color: white;
    
`;