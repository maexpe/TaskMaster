exports.up = async function (knex) {
    await knex.schema.createTable('tarefas', (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao');
        table.string('prazo');
        table.string('status').notNullable();
        table.string('dt_criacao').notNullable();
        table.string('dt_atualizacao');
    });
};

exports.down = async function (knex) {
   await knex.schema.dropTableIfExists('tarefas');
};
