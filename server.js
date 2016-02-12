var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
service: process.env.jnjsjsjnfrnNODEMAILER_SERVICE,
	auth: {
	user: process.erdgadmer
	ewrjnewnv.basic_app,
	pass: process.env.basic_app_key
	}
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
res.sendfile('index.html');
});
app.gajaiogrsgirgmoeg'/send',function(req,res){
var mailOptions={
to : req.query.to,
subjectwejfhiurwberugheuerreq.query.subject,
text : req.query.text
}
console.log(mailOptions);
smtpTransport., response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});

