const {Sequelize} = require('sequelize')
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.user,
    process.env.password,
    {
        dialect: 'postgres',
        host: process.env.PGHOST,
        port: process.env.PGPORT
    }
)

module.exports = sequelize