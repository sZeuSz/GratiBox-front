import { HiArrowDown } from "react-icons/hi";
import styled from "styled-components";


function States({ setState, state }) {
    return(
        <ContainerSelect>
            <State required value={state} onChange={e => setState(e.target.value)}>
                <option value="estado">Estado</option> 
                <option value="Acre">AC</option> 
                <option value="Alagoas">AL</option> 
                <option value="Amazonas">AM</option> 
                <option value="Amapá">AP</option> 
                <option value="Bahia">BA</option> 
                <option value="Ceará">CE</option> 
                <option value="Distrito Federal">DF</option> 
                <option value="Espírito Santo">ES</option> 
                <option value="Goiás">GO</option> 
                <option value="Maranhão">MA</option> 
                <option value="Mato Grosso">MT</option> 
                <option value="Mato Grosso do Sul">MS</option> 
                <option value="Minas Gerais">MG</option> 
                <option value="Pará">PA</option> 
                <option value="Paraíba">PB</option> 
                <option value="Paraná">PR</option> 
                <option value="Pernambuco">PE</option> 
                <option value="Piauí">PI</option> 
                <option value="Rio de Janeiro">RJ</option> 
                <option value="Rio Grande do Norte">RN</option> 
                <option value="Rondônia">RO</option> 
                <option value="Rio Grande do Sul">RS</option> 
                <option value="Roraima">RR</option> 
                <option value="Santa Catarina">SC</option> 
                <option value="Sergipe">SE</option> 
                <option value="São Paulo">SP</option> 
                <option value="Tocantins">TO</option>
            </State>
            <HiArrowDown size='25' color='#4D65A8'/>
        </ContainerSelect>
    );
}

export default States;

const ContainerSelect = styled.div`
    position: relative;
    svg {
        position: absolute;
        right: 8px;
        bottom: 10px;
    }
`;

const State = styled.select`
    background-color: #E0D1ED9E;
    min-height: 50px;
    width: 110px;
    font-size: 18px;
    color: #4D65A8;
    font-weight: bold;
    border-radius: 5px;
    padding: 0 10px;
    appearance: none;
    border: none;
    margin-left: 25px;

    @media(max-width: 315px){
        margin-left: 15px;
    }
`;