module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './sprintRDBMS.sqlite3'
		},

		useNullAsDefault: true,
		migrations: {
			directory: './migrations'
		}
	}
};
