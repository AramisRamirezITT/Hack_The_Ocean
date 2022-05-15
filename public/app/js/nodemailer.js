var nodemailer = require("nodemailer");
var express = require("express");
var app = express();



app.post("/send-email", (req, res) =>{
    console.log("Email Enviado");
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 587,
        secure: false,
        auth: {
            user: "jlaramis9@gmail.com",
            pass: "mmuenhsatnvmjatj",
        }
    });

    var mailOptions = {
        from: "remitente",
        to: "lizeth.conu@gmail.com",
        subject: "Hola Karen espero que este bien tkm",
        text: "Sorry por estar jugando mientras tu te rompias la cabeza :c tkm"


    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            res.status(500).send(error.message);
        }else {
            console.log("Email enviado");
            res.status(200).json(req.body);
        }

    });

});

app.listen(3000, () =>{
   console.log("Servidor en localhost:3000")

});