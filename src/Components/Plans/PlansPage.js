import { useContext, useEffect } from 'react';
import UserContext from "../../Contexts/UserContext";
import { ContainerMain } from '../SignUp/SignUpPageStyled';
import { useHistory } from 'react-router';
import { ButtonSubscribe, ContainerPlans, Description, Figure, ImagePlan, MessagePlan, Title } from './PlansPageStyled';
import PageLoading from '../../Shared/Loadings';

export default function PlansPage() {
    
    const { userData } = useContext(UserContext);

    const history = useHistory();

    if (!userData) {
        history.push('/');
    }

    return (
        <>
        { !userData ? <PageLoading /> :
        <ContainerMain>
            <Title>Bom te ver por aqui, @{userData.name}.</Title>
            <MessagePlan>Você ainda não assinou um plano, que tal começar agora?</MessagePlan>
            <ContainerPlans>
                <Figure>
                    <ImagePlan src="https://s3-alpha-sig.figma.com/img/317a/da82/1249b443f640e3b6cbfb0d2e766dfbd9?Expires=1638144000&Signature=QstMKhzJXvAWrN5p~yaQNOb6ITN5vI4e-RGXKxpbra9gIWpxsbvLN0t7DQikFjKzf-dpiHNsMwGcbSPBqcspkw2s21WJgiwRaH--Wt5fQMEF6LIAWxEsIXDtCt1EKm24bMvMAZ5vx6EUo~SdhUlWp5-MCNKpGJ~TBquHGtkZ0FfV3xQJHQXvR9L~3CPF-0nkCPw0W9DC2YjUSNePGBlnQy9WOLnKu09cVIgkU1b1-TLA6A3Awgau8gxju2J1FMt1gyufCY37xM1Q5ier22xCtDkjgeRuOpQ~yp-KOwxRxARbq2fMkzJn82KTYQO6yHume2KmkY4h0Qd7geOcCQbb1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    <Description>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</Description>
                    <ButtonSubscribe onClick={() => history.push('/subscribe-plan')} >Subscribe</ButtonSubscribe>
                </Figure>
                <Figure>
                    <ImagePlan src="https://s3-alpha-sig.figma.com/img/4c44/dd1e/c0534d642aec147226c001354a935128?Expires=1638144000&Signature=Vn7pWZTG6r622oXLO7~iHp6F6yvQM6T-oJKaXulfIvSgO3IldiUtizqAZFyxWt9uyT4CjOBvrTcegvIWGYsEKdMiax9Ah2w4w6YFfOXldfpSRV202vJVAseK81XC6oNDMRKPrKOOVfRZamptQgMLMuHROTvjZlvZi9Etdk5dDJUmdyjHvRi~zpAioyHMXqegdjPRTnCOoRKVw-xbJYvHwHSvuR-OC4XuqnO5biThtnm1DWeRkLc9-BNOvWSCLr5KSPyt96cRtb3aE8XtcZDLS5BlhBLQPdWjHzYSDlUOepis1VKxjOuNOOO-xft8z4uB-cPxMN7tkMLVhdQTMPGt~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    <Description>Você recebe um box por mês. Ideal e recomendado para quem está começando agora.</Description>
                    <ButtonSubscribe onClick={() => history.push('/subscribe-plan')} >Subscribe</ButtonSubscribe>
                </Figure>
            </ContainerPlans>
            </ContainerMain>
        }
        </>
    )
}