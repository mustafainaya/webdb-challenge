exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', (tbl) => {
		tbl.increments();

		tbl.text('description').notNullable().unique();
		tbl.text('notes');
		tbl.boolean('completed').notNullable().defaultTo(false);
		tbl
			.integer('project_id')
			.unsigned()
			.references('id')
			.inTable('projects')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
