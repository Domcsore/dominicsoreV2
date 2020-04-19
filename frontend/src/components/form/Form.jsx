import React from 'react';

function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
}

function Form(props) {
    const [formValues, setFormValues] = React.useState({});
    const [formValid, setFormValid] = React.useState({value: false});

    function setFormValue(inputName, value) {
        setFormValues((prevState) => {return {...prevState, [inputName]:value}});
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/sendenquiry', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        }).then((response) => {
            if (response.status(200)) {
                console.log(response);
            } else {
                console.log(response);
            }
        })
    }

    return (
        <form className={"test"}>
            {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { setFormValue: setFormValue, formValues: formValues});
                })
            }
            <button onClick={handleSubmit}>{props.submitLabel}</button>
        </form>
    )
}

export default Form;