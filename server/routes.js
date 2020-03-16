const express = require('express');
const router = express.Router();
const api = require('./api');
const { gitClone } = require('./helpers/git');

router.post('/settings', async (request, response) => {
	try {
		const settings = request.body;

		await api.saveSettings(settings);
		await gitClone(settings);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get('/settings', async (request, response) => {
	try {
		const { data } = await api.getSettings();

		await response.json(data);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get('/builds', async (request, response) => {
	try {
		const { data } = await api.getBuildList();

		console.log(data);

		response.send(data);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});


router.post(`/builds/:commitHash`, async (request, response) => {
	try {
		const data = request.body;

		await api.addBuild(data);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get(`/builds/:buildId`, async (request, response) => {
	try {
		const buildId = request.params.buildId;

		const data = await api.getBuildDetails(buildId);

		console.log(response);
		// console.log(data);

		response.send(response);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get(`/builds/:buildId/logs`, async (request, response) => {
	try {

	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

module.exports = router;