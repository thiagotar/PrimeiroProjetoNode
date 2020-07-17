
exports.up = function(knex) {
  return knex.schema.createTable('Ongs', function(table){
      table.string('Id').primary();
      table.string('Nome').notNullable();
      table.string('Email').notNullable();
      table.string('Whatsapp').notNullable();
      table.string('Cidade').notNullable();
      table.string('Uf',2).notNullable();

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Ongs');
};
