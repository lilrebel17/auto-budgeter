import React, { useState } from "react";
import './NumberInput.css'

export default function NumberInput(props) {

    const [value = "",newValue] = useState()

    function updateValue(event) {
        newValue(event.target.value)
    }
        return (
                <label 
                    id={`${props.inputName}Label`} 
                    htmlFor={props.inputName}
                    >
                        {props.labelName}
                <input 
                    type={'number'} 
                    name={props.inputName} 
                    htmlFor={props.formName}
                    id={props.inputID}
                    value={value}
                    step={0.01}
                    min={0}
                    onChange={updateValue}
                />
                </label>
        )
    }