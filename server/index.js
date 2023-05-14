const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const emailjs = require('@emailjs/nodejs');
require('dotenv').config({ path:__dirname+'/.env' });

app.post("/api/contact-form", (req, res) => {
    emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, req.body, { publicKey: process.env.PUBLIC_KEY, privateKey: process.env.PRIVATE_KEY })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    res.json({ message: "Message SENT!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
