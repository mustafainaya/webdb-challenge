const express = require('express');

const projectRoute = require('./routes/projectRoute');
const actionRoute = require('./routes/actionRoute');

const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.use('/api/projects', projectRoute);
server.use('/api/actions', actionRoute);

server.get('/', (req, res) => {
	res.send(`Hello And Welcome to RDBMS`);
});

const port = process.env.PORT || 9999;

server.listen(port, () => {
	console.log(` API is UP  on${port} `);
});
