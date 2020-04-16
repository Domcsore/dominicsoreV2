import React from 'react';

function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('form submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} />
        </form>
    )
}

export default Form;