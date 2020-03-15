const express = require('express');
const router = express.Router();
const storage = require('./api');

router.post('/settings', async (request, response) => {
	try {
		const settings = request.body;

		storage.saveSettings(settings);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get('/settings', async (request, response) => {
	try {
		const { data } = await storage.getSettings();

		console.log(data);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

module.exports = router;