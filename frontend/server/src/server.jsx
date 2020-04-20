const express = require('express');
const conf = require('config');
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const nodemailer = require ('nodemailer');

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
    let transporter = nodemailer.createTransport({
        host: conf.get("Mail.Host"),
        port: conf.get("Mail.Port"),
        secure: false,
        auth: {
            type: "PLAIN",
            user: conf.get("Mail.User"),
            pass: conf.get("Mail.Pass")
        }
    });

    transporter.verify(function(verifyError, success) {
        if (verifyError) {
            console.log(verifyError);
            res.status(500).end();
            return
        } else {
            let emailFilePath = path.join(__dirname + "../../../public/docs/thanksemail.html");
            fs.readFile(emailFilePath, 'utf8', (fileReadError, data) => {
                if (fileReadError) {
                    console.log(fileReadError);
                    res.status(500).end();
                    return
                }

                // Send thanks message
                let thanksMessageConfig = {
                    from: "enquiries@dominicsore.com",
                    to: req.body.email,
                    subject: "Thank you for your enquiry!",
                    text: "Thank you for your enquiry, I'll be in touch with you as soon as possible!",
                    html: data,
                    attachDataUrls: true,
                };

                transporter.sendMail(thanksMessageConfig, (sendError, info) => {
                  if (sendError)  {
                      console.log(sendError);
                      res.status(500).end();
                  }
                });

                // Send enquiry message
                let enquiryMessageConfig = {
                    from: "enquiries@dominicsore.com",
                    to: "enquiries@dominicsore.com",
                    subject: `New enquiry from ${req.body.name}`,
                    text: `
                        Name: ${req.body.name}\n
                        Email: ${req.body.email}\n
                        Enquiry: ${req.body.enquiry}`
                };

                transporter.sendMail(enquiryMessageConfig, (sendError, info) => {
                    if (sendError)  {
                        console.log(sendError);
                        res.status(500).end();
                    }

                    res.status(200).end();
                })
            })
        }
    });
});

console.log(`listening on port ${port}`);
let server = app.listen(port);