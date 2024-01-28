exports.up = async function (knex) {
    await knex.schema.createTable('tarefas_usuarios', (table) => {
        table.increments('id').primary();
        table.bigInteger('id_tarefa').references('id').inTable('tarefas');
        table.bigInteger('id_usuario').references('id').inTable('usuarios');
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('tarefas_usuarios');
};