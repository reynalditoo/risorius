const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
/*const xoauth2 = require('xoauth2'); // pour utiliser gmail comme transporter en toute sécurité */
const config = require('../config/database');
const FormMsg = require('../models/contact');


router.post('/contact', (req, res, next) => {
	let newFormMsg = new FormMsg({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	});  

	/*qui "transporte" le mail ? Le mail est envoyé depuis un 
	formulaire jusqu'à une adresse mail destinataire, mais il 
	faut un compte/hôte qui envoie ce mail
	1) Créer un compte sur https://ethereal.email
	2) Se servir des ID et mdp ci-dessous
	N.B: Pour utilser une adresse gmail:
	=> cliquer sur la lettre en haut à droite, puis sur 'mon compte' => "connexion et sécurité"
	=> en bas, activer le paramètre "Autoriser les applications moins sécurisées"
	(=> à éviter car peut rendre le compte vulnérable)*/
	let transporter = nodemailer.createTransport({
        host: 'imap.ethereal.email',
        port: 587,
        security: 'STARTTLS', // true for 465, false for other ports
        auth: {
            user: 'p42px27sormjvgcs@ethereal.email', // generated ethereal user
            pass: 'smmGVK1TVpJSnuh3f3'  // generated ethereal password
        }/*,
        tls: {
	  		rejectUnauthorized: false // pour le faire marcher en localhost (parait-il..)
	  }*/
    });

	var mailOptions = {
	  from: newFormMsg.email,
	  to: 'difool26@hotmail.com',
	  subject: 'Nouveau mail de Risorius.fr',
	  text: newFormMsg.message // utiliser 'html' au lieu de 'text' peut conduire à des attaques XSS
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    res.json({success: false, msg: mailOptions.from + ' failed to send mail to ' + mailOptions.to});
	  } else {
	    res.json({success: true, msg: 'Your message : ' + mailOptions.html + 'was sent !'});
	  }
	});
});

module.exports = router;