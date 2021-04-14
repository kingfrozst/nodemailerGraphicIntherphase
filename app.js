const express = require('express');
const app = express();
const nodemailer = require('nodemailer'); 
const jsdom = require("jsdom");
const { default: axios } = require('axios');
const { response } = require('express');


// nodemailer

//server
app.set('port', 3000);

app.use(express.static('public'))

app.listen(app.get('port'), () =>{
    console.log("Server running in", app.get('port'));
})

app.use(express.json());

app.post('/api', (req, res)=>{
  const body = req.body;
  console.log(req.body.password);
  res.send('Everything fresh')

  var transporter = nodemailer.createTransport({
    service: body.service,
    auth: {
      user: body.email,
      pass: body.password
    }
  });
  
  var mailOptions = {
    from: body.from,
    to: body.to,
    subject: body.subject,
    text: body.content
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
})

