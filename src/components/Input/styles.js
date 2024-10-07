import styled from 'styled-components';

export const InputContainer = styled.div`

    height: 62px;
    width: 80%;

    margin: 20px;

    input {
        background: transparent;
        border: 1px solid #999999;
        border-radius: 20px;
        color: #FFFFFF;
        font-size: 20px;
        height: inherit;
        margin-right: 12px;
        padding: 0 20px;
        transition: .5s all ease-in;        
        width: calc(100% - (20px * 2));
    }

    input:focus-visible {
        border: 1px solid #0f73ee;
        outline: 1px solid #0f73ee;
    }

`