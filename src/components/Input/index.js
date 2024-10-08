import React from "react";

import { InputContainer } from './styles';

function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input 
                name="repositorio" 
                type="text"
                value={ value } 
                onChange={ onChange } 
                placeholder="username/repositório" />
        </InputContainer>
    );
}

export default Input;