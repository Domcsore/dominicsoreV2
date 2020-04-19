import React from 'react';
import Form from '../components/form/Form.jsx';
import FormInput from "../components/form/FormInput.jsx";
import FormGroup from "../components/form/FormGroup.jsx";
import FormTextArea from "../components/form/FormTextArea.jsx";
import { validations } from "../components/form/validation.js";

function ContactForm(props) {
    return (
        <Form postEndpoint={'/api/sendenquiry'} submitLabel={"Send"}>
            <FormGroup title={"Contact"}>
               <FormInput label={"Name"} name={"name"} validations={[new validations.Required("How will I know who you are if you leave this blank?")]}/>
               <FormInput label={"Email"} name={"email"} validations={[new validations.Required("How will I know how to contact you if you leave this blank?")]}/>
               <FormTextArea label={"Enquiry"} name={"enquiry"} validations={[new validations.Required("How will I know what you want if you leave this blank?")]}/>
            </FormGroup>
        </Form>
    )
}

export default  ContactForm;