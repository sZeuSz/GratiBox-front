import styled from 'styled-components';

const Input = styled.input`
    width: 90vw;
    height: 150px;
    border: none;
    border-radius: 20px;
    font-weight: 500;
    font-style: normal;
    font-size: 50px;
    margin: 17px 0px;
    padding-left: 25px;
    &::placeholder{
        color: #60484866;
        font-weight: 500;
        font-size: 50px;
    }
    &:focus{
        font-weight: 500;
        font-size: 50px;
    }
`;

export default Input;