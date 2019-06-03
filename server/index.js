const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors');
app = express();

const scheduleRoutes = require('./routes/schedules');
const clinicianRoutes = require('./routes/clinicians');
const savedRoutes = require('./routes/saved_times');
const searchRoutes = require('./routes/searches');
const userRoutes = require('./routes/users');

// allows us to access request body in a post or put
app.use(cors());
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
app.use('/api/search', searchRoutes);
app.use('/api/users', userRoutes);

app.listen(4000, () =>
	console.log("App on port " + 4000)
);
