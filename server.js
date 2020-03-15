const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const port = 9000;

app.use('/css', express.static(path.resolve(__dirname, 'src/css')));
app.use('/assets', express.static(path.resolve(__dirname, 'src/assets')));
app.use('/', express.static(path.resolve(__dirname, 'html')));


app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});