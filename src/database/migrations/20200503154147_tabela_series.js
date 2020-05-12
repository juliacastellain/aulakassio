
exports.up = function(knex) {
  return knex.schema.createTable('series',
  function (table){
      table.string('ID').primary();
      table.string('NOMESERIE').notNullable();
      table.string('GENERO').notNullable();
      table.string('TEMPORADAS').notNullable();
  });
  
};

exports.down = function(knex) {
  
};
