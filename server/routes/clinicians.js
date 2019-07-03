const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

router.get('/', async (req, res, next) => {
	try {
		const clinicians = await db.Clinicians.find({}, 'ID FirstName LastName', { lean: true }).sort('FirstName LastName');
		res.send(clinicians);
	} catch (err) {
		next(err);
	}
});


module.exports = router