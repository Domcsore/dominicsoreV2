import React from 'react';
import {validate} from "./validation";

function TextArea(props) {
    const [validationMessage, setValidationMessage] = React.useState({value: null});
    const areaRef = React.useRef();

    React.useEffect(() => {
        console.log(areaRef.current.value);
        if (!props.validations) {
            props.setFormValid(props.name, true);
        } else {
            let valid = true;
            let validationResults = validate(areaRef.current.value, props.validations);
            for (let vResultIndex = 0; vResultIndex < validationResults.length; vResultIndex++) {
                let validationResult = validationResults[vResultIndex];
                valid = validationResult.valid;
            }
            props.setFormValid(props.name, valid);
        }
    }, []);

    React.useEffect(() => {
        if (props.formSent.value) {
            handleValidation(areaRef.current.value);
        }
    }, [props.formSent]);

    function handleValidation(inputValue) {
        if (!props.validations) return;
        let valid = true;
        let validationResults = validate(inputValue, props.validations);
        for (let vResultIndex = 0; vResultIndex < validationResults.length; vResultIndex++) {
            let validationResult = validationResults[vResultIndex];
            if (!validationResult.valid) {
                valid = false;
                setValidationMessage((() => ({value: validationResult.message})));
            }
        }
        props.setFormValid(props.name, valid);
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
            <textarea
                ref={areaRef}
                name={props.name}
                value={props.values[props.name] || ''}
                onChange={handleInput}
                className={validationMessage.value ? "invalid" : ""}
                onBlur={(e) => {handleValidation(e.target.value)}}
            />
        </React.Fragment>
    )
}

export default TextArea;