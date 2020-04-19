import React from 'react';
import {validate} from "./validation";

function FormInput(props) {
    const [validationMessage, setValidationMessage] = React.useState({value: null});

    function handleValidation(e) {
        if (!props.validations) return;
        let valid = true;
        let validationResults = validate(e.target.value, props.validations);
        for (let vResultIndex = 0; vResultIndex < validationResults.length; vResultIndex++) {
            let validationResult = validationResults[vResultIndex];
            if (!validationResult.valid) {
                valid = false;
                setValidationMessage((() => ({value: validationResult.message})));
            }
        }
        if (valid) {
            setValidationMessage(() => ({value: null}));
        }
    }

    function handleInput(e) {
        props.setFormValue(props.name, e.target.value);
        handleValidation(e);
    }

    return (
        <React.Fragment>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                name={props.name}
                type={"text"}
                value={props.values[props.name] || ''}
                onChange={handleInput}
                className={validationMessage.value ? "invalid" : ""}
                onBlur={handleValidation}
            />
        </React.Fragment>
    )
}

export default FormInput;