const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = 3000;
const root = require('path').join(__dirname, 'dist');

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use('/api', require('./server/routes'));

app.use(express.static(root));

app.get('*', (req, res) => {
	res.sendFile('index.html', { root });
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});