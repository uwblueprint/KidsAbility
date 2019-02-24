const express = require('express'),
	mongoose = require('mongoose'),
	app = express();

const scheduleRoutes = require('./routes/schedules');

app.get('/', function(req, res){
	res.send("root");
});

// prefix for the routes
app.use('/api/schedules', scheduleRoutes);

app.listen(3000, function(){
	console.log("App on port " + 3000);
	console.log(mongoose.connection.readyState);
});