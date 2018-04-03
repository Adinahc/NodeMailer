const express = require('express');
var bodyParser = require('body-parser');
 
const app = express();
const port = process.env.PORT || 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// parse various different custom JSON types as JSON
//app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
//app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
//app.use(bodyParser.text({ type: 'text/html' }))

app.get('/api/hello', (req, res, next) => {
    res.send({ express: 'Hello From Express' });
    console.log('Hello');
});

app.post('/api/sendMail', (req, res, next) => {

    const sgMail = require('@sendgrid/mail');
    const message = req.query.name + ' ' + req.query.email + ' ' + req.query.phone;
    sgMail.setApiKey('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');
    const msg = {
        to: 'adinahc@gmail.com',
        from: 'adinahc@gmail.com',
        subject: 'Registration',
        text: message
    };
    console.log(message);
    sgMail.send(msg);    
    res.send({ express: 'Email Sent' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));