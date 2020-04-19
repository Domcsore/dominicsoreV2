import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './apps/ContactForm.jsx';

ReactDOM.hydrate(<ContactForm />, document.getElementById('contact-app'));