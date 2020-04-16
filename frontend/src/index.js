import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './apps/ContactForm';

ReactDOM.hydrate(document.getElementById('contact-app'), <ContactForm/>);