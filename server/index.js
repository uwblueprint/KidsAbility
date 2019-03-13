const express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express();

const scheduleRoutes = require('./routes/schedules');
const clinicianRoutes = require('./routes/clinicians');

// allows us to access request body in a post or put
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.send("root");
});

// prefix route for the routes
app.use('/api/schedules', scheduleRoutes);
app.use('/api/clinicians', clinicianRoutes);

app.listen(5000, () =>
	console.log("App on port " + 5000)
);