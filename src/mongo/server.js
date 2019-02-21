const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// connection string brandon is user '' is my password
const url = "mongodb+srv://brandon:<password>@kidsability-vswng.mongodb.net/test?retryWrites=true"

const app = express();
const port = process.env.PORT || 3000;

mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//basic routes (will update and refactor later)
app.get('/api/work', (req, res) => {
	res.send({ work: 'this works' });
});

app.listen(port, () => console.log("LISTENING"));
/*
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect(url, function(err, db){

	if (err) {
		throw err;
	} else {
    	console.log("connected");
    }
});
*/