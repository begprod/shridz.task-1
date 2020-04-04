const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const github = require('./helpers/github');
const git = require('./helpers/git');
const api = require('./api');

router.post('/settings', asyncHandler(async(request, response) => {
	const { repoName, buildCommand, mainBranch, period } = request.body;

	await git.updateSettings(request.body);

	response.sendStatus(200);
}));

router.get('/settings', asyncHandler(async(request, response) => {
	const { data } = await api.getSettings();

	await response.json(data);
}));

module.exports = router;