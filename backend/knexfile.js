module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './db/taskmaster.db',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './src/migrations',
        },
    },
};