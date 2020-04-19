const express = require('express');
const conf = require('config');
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const app = express();
const port = conf.get('Port');

import ContactForm from '../../src/apps/ContactForm.jsx';

app.use("/assets", express.static(path.join(__dirname, '../../public/assets')));
app.use("/", express.static(path.join(__dirname, '../../public/root')));

app.get("/", (req, res) => {
    const servedFile = path.join(__dirname, '../../public/pages/index.html');
    fs.readFile(servedFile, 'utf8', (err, data) => {
        if (err) {
            console.error('could not load index file:', err);
            return res.status(500).send("Something went wrong");
        }

        const contactForm = ReactDOMServer.renderToString(<ContactForm />);
        return res.send(data.replace('<div id="contact-app"></div>', `<div id="contact-app">${contactForm}</div>`));
    })
});

app.use("/api", express.json());
app.post("/api/sendenquiry", (req, res) => {
    console.log(req.body);
    res.send();
});

console.log(`listening on port ${port}`);
let server = app.listen(port);