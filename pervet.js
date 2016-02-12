var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
service: process.env.jnjsjsjnfrnNODEMAILER_SERVICE,esk;lfj[eoir r\
oa
oa\foa r
oaw
er0i eri ew
rkewrpo ifk
fk epfi eri9 3\i
 k]
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
var mailOptions={jfeohjepor vr
 ie
 i  k
 kdf kfk 
 f ifjerifej\fe
 f ierfefe
 fread demon
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

