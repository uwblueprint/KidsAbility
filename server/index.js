const express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express();

const scheduleRoutes = require('./routes/schedules');
const clinicianRoutes = require('./routes/clinicians');
const savedRoutes = require('./routes/saved_times');

// allows us to access request body in a post or put
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); 

app.get('/', function(req, res){
	res.send("root");
});

// prefix route for the routes
app.use('/api/schedules', scheduleRoutes);
app.use('/api/clinicians', clinicianRoutes);
app.use('/api/saved', savedRoutes);

app.listen(5000, () =>
	console.log("App on port " + 5000)
);