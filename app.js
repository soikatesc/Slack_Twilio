var express = require('express');
var bp = require('body-parser');
var dotenv = require('dotenv');
var twilio = require('twilio');
var request = require('request');
var rp = require('request-promise');

dotenv.config();
var app = express();
var port = process.env.SERVER_PORT || 3000;

app.use(bp.urlencoded({extended: false}));

var accountSid = process.env.ACCOUNT_SID; 
var authToken = process.env.AUTH_TOKEN; 


app.post('/slack_in', (req, res, next) => {
	var userName = req.body.user_name;

	var client = new twilio(accountSid, authToken);

	client.messages.create({
    	body: req.body.text,
    	to: 'YOUR PHONE NUMBER',  // Text this number
    	from: 'YOUR TWILIO NUMBER' // From a valid Twilio number
	})
	.then((message) => console.log(message.sid));
	return res.status(200).end();
})

app.post('/message', (req, res) => {
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	var options = {
	    method: 'POST',
	    uri: process.env.WEBHOOK_URL_INCOMMING,
	    body: {
	        "text": msgBody
	    },
	    json: true
	};

	rp(options)
		.then(function(parsedBody){
			console.log('succedd');
		})
		.catch(function(err){
			console.log(err);
		})

	return res.status(200).end();
})

app.listen(port, function(){
	console.log(`Listining on port : ${port}`);
})


