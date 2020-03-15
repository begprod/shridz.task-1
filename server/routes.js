const express = require('express');
const router = express.Router();
const api = require('./api');
const gitClone = require('./helpers/git-clone');

router.post('/settings', async (request, response) => {
	try {
		const settings = request.body;

		api.saveSettings(settings);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

router.get('/settings', async (request, response) => {
	try {
		const settings = await api.getSettings();
		const cloneSettings = {
			repoName: settings.repoName,
			branchName: settings.mainBranch,
			buildCommand: settings.buildCommand
		};

		await gitClone(cloneSettings.repoName, cloneSettings.branchName);

		// console.log(cloneSettings);

		response.sendStatus(200);
	} catch (error) {
		console.log(error);

		response.sendStatus(500);
	}
});

module.exports = router;