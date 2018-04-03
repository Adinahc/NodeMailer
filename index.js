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
 
    /*const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
    const msg = {
      to: 'adinahc@gmail.com',
      from: 'adinahc@gmail.com',
      subject: 'Bags for th e Cure Registration',
      text: 'Registration'
    };
    sgMail.send(msg);
    //console.log(req.body);
    res.send({ express: 'Email Sent' });*/

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
    const msg = {
        to: 'adinahc@gmail.com',
        from: 'adinahc@gmail.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);    
    console.log(msg);
    res.send({ express: 'Email Sent' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));