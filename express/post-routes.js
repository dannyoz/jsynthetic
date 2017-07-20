var nodemailer = require('nodemailer');
var routes = {};
var constants = require('../app/shared/constants.js');

routes[`${constants.apiVersion}sendmessage`] = function(req,res){

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});

	var name = req.body.name,
		email = req.body.email,
		message = req.body.message;

	var mailOptions = {
	    from: name+' ('+email+')',
	    to: 'danosborne@rocketmail.com',
	    subject: 'Message from Jimmy synthetic website',
	    text: name+' ('+email+') sent the following message on the Jimmy Synthetic website: ' +message,
	    html: '<p><b>' + name+' ('+email+')</b></p><p>Sent the following message on the Jimmy Synthetic website:</p><p>' +message + '</p>'
	};

	transporter.sendMail(mailOptions, function(err, info){
	    if(err){
	        res.status(500).send(err);
	    }
	    res.status(200).send('Message sent');
	});
};

module.exports = routes;
