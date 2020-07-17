
exports.up = function(knex) {
    return knex.schema.createTable('Incidente', function(table){
        table.increments('Id');
        table.string('Titulo').notNullable();
        table.string('Descricao').notNullable();
        table.decimal('valor').notNullable();
        
        table.string('Ong_id').notNullable();

        table.foreign('Ong_id').references('Id').inTable('ongs')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Incidente');
};
