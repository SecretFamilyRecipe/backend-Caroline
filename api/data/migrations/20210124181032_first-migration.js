exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('user_username', 256).notNullable()
        .unique()
      tbl.string('user_password', 256).notNullable()
      tbl.string('user_email', 256).notNullable()
        .unique()
      tbl.timestamps(false, true)
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
