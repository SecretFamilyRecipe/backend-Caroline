exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (tbl) => {
      tbl.increments('id')
      tbl.string('email', 256).notNullable()
        .unique()
      tbl.string('password', 256).notNullable()
    })
    
    .createTable('recipes', (tbl) => {
      tbl.increments('id')
      tbl.integer('recipe_id')
        .unsigned()
        .unique()
      tbl.string('recipe_name', 128).notNullable()
      tbl.timestamps(false, true)
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('recipes')
};
