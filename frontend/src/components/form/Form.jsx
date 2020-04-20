import React from 'react';
import { formStates } from "./formstates.js";

function Form(props) {
    const [formValues, setFormValues] = React.useState({});
    const [formValids, setFormValids] = React.useState({});
    const [formSent, setFormSent] = React.useState({value: false});
    const [formState, setFormState] = React.useState({state: formStates.WAITING});

    function setFormValue(inputName, value) {
        setFormValues((prevState) => ({...prevState, [inputName]:value}));
    }

    function setFormValid(inputName, valid) {
        setFormValids((prevState) => ({...prevState, [inputName]:valid}))
    }

    function handleSubmit(e) {
        e.preventDefault();

        setFormSent({value: true});

        let formValid = true;
        for (let fv in formValids) {
            if (!formValids[fv]) formValid = false;
        }

        if (formValid) {
            setFormState({state: formStates.SENDING});
            fetch('/api/sendenquiry', {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            }).then((response) => {
                if (response.status === 200) {
                    setFormState({state: formStates.SUCCESS});
                } else {
                    setFormState({state: formStates.FAILED});
                    setFormSent({value: false});
                }
            });
        } else {
            // need to be set in timeout so react has time to update
            setTimeout(() => {
                setFormSent({value: false});
                setFormState({state: formStates.WAITING});
            }, 200);

        }
    }

    return (
        <form className={"test"}>
            {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, {
                        setFormValue: setFormValue,
                        formValues: formValues,
                        setFormValid: setFormValid,
                        formSent: formSent
                    });
                })
            }
            <button className={formState.state} disabled={formSent.value} onClick={handleSubmit}>
                {formState.state === formStates.SUCCESS ? <img src={"/assets/images/1x/tick.png"} alt={"tick"} /> : props.submitLabel}
            </button>
            {formState.state === formStates.FAILED ? <AlertMessage /> : ""}
        </form>
    )
}

function AlertMessage() {
    return (
        <section className={"alert-box"}>
            <div className={"alert-icon-container"}>
                <img className={"alert-icon"} src={"/assets/images/1x/exlamation-mark.png"} alt={"Alert!"} />
            </div>
            <div className={"alert-message"}>
                <span>Something went wrong, try sending again in a few moments.</span>
            </div>
        </section>
    )
}

export default Form;