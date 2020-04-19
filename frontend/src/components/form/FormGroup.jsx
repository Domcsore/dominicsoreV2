import React from 'react';

function FormGroup(props) {
    return (
        <section>
            <h3>{props.title}</h3>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { setFormValue: props.setFormValue, values: props.formValues});
            })}
        </section>
    )
}

export default FormGroup;