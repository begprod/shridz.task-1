const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
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

router.get('/builds', asyncHandler(async (request, response) => {
	const { offset, limit } = request.query;
	const { data } = await api.getBuildList(offset, limit);

	response.send(data);
}));

router.post('/builds/:commitHash', asyncHandler(async(request, response) => {
	const { params: { commitHash } } = request;
	const info = await git.getCommitInfo(commitHash);
	const list = await api.getBuildList();
	const build = list.data.data.find((el) => el.commitHash === info.commitHash);

	response.send(build);
}));

router.get('/builds/:buildId', asyncHandler(async(request, response) => {
	const { params: { buildId } } = request;
	const { data } = await api.getBuildDetails(buildId);

	await response.json(data);
}));

router.get('/builds/:buildId/logs', asyncHandler(async(request, response) => {
	const { params: { buildId } } = request;
	const {data: {data: { commitHash, status }}} = await api.getBuildDetails(buildId);
	const log = await api.getBuildLog(buildId);

	await response.json(log.data);
}));

module.exports = router;