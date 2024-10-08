import styled from 'styled-components';

export const ButtonContainer = styled.button`

    font-weight: bold;
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;

    transition: 
        background-color ease-in-out .3s,
        color linear .3s;

    &:hover {
        color: #FAFAFA;
        background-color: #FAFAFA40;
        cursor: pointer;
    }

`