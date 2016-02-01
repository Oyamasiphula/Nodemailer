var nodemailer = require("nodemailer");

/*Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.*/

var smtpTransport = nodemailer.createTransport("SMTP",{
service: process.env.NODEMAILER_SERVICE,
    auth: {
    user: process.env.basic_app,
    pass: process.env.basic_app_key
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Attention!!! Alarm ✔ <oysiphula@gmail.com>', // sender address
    to: '0768093063@txt.att.net, lsibhula@gmail.com, oyama@projectcodex.co', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
email.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});