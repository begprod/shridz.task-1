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
	saveSettings: (settings) => apiRequest.post('conf', settings),

	getSettings: () => apiRequest.get('conf').then(data => data.data.data)
};

module.exports = api;