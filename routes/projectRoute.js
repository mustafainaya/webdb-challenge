const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', async (req, res) => {
	try {
		const showProjects = await db('projects');
		res.status(200).json(showProjects);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const project = await db('projects').where({ id: req.params.id }).first();
		const action = await db('actions').where({ project_id: req.params.id });
		if (project) {
			let projectObj = { ...project, actions: action };
			res.status(200).json({ projectObj });
		} else {
			res.status(404).json('Does Not Exist');
		}

		console.log(project);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const project = req.body;
		const [ id ] = await db('projects').insert(project);
		const newProject = await db('projects').where({ id }).first();
		res.status(201).json(newProject);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
