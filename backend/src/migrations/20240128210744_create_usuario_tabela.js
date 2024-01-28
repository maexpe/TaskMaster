exports.up = async function (knex) {
    await knex.schema.createTable('usuarios', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senhaHash').notNullable();
        table.string('dt_criacao').notNullable();
        table.string('dt_atualizacao');
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('usuarios');
};