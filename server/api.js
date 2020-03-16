const axios = require('axios');
const https = require('https');

const apiRequest = axios.create({
	baseURL: 'https://hw.shri.yandex/api/',
	headers: {
		Authorization: `Bearer ${process.env.API_TOKEN}`
	},
	httpsAgent: new https.Agent({
		rejectUnauthorized: false,
	})
});

const api = {
	getBuildList: (offset = 0, limit = 25) => {
		const params = new URLSearchParams();
		params.set('offset', offset);
		params.set('limit', limit);

		return apiRequest.get('build/list', params);
	},

	getBuildLog: (buildId) => {
		const params = new URLSearchParams();
		params.set('buildId', buildId);

		return apiRequest.get('build/log', params);
	},


	getBuildDetails: (buildId) => {
		const params = new URLSearchParams();
		params.set('buildId', buildId);

		return apiRequest.get('build/details', params);
	},

	addBuild: (data) => {
		apiRequest.post('build/request', data);
	},

	saveSettings: (settings) => apiRequest.post('conf', settings),

	getSettings: () => apiRequest.get('conf'),

	deleteSettings: () => apiRequest.delete('conf')
};

module.exports = api;