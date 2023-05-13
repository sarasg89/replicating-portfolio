const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const emailjs = require('@emailjs/nodejs');
require('dotenv').config({ path:__dirname+'/.env' });

app.post("/api/contact-form", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    emailjs.send(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, req.body, { publicKey: process.env.YOUR_PUBLIC_KEY, privateKey: process.env.YOUR_PRIVATE_KEY })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    res.json({ message: "Message received!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
