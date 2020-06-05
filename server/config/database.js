const seq = require('sequelize');
require('dotenv').config({path: 'variables.env' });

module.exports = new seq(process.env.db_name, process.env.db_user, process.env.db_pass, {
    host: process.env.db_host,
    dialect: 'mysql',
    port: process.env.db_port,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: 1
});