const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', async (req, res) => {
	try {
		const showActions = await db('actions');
		res.status(200).json(showActions);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const action = req.body;
		const [ id ] = await db('actions').insert(action);
		const newAction = await db('actions').where({ id }).first();
		res.status(201).json(newAction);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
