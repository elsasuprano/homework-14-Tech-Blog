const { Sequelize } = require( 'sequelize')

module.exports = new Sequelize(process.env.JAWSDB.URL || process.env.LOCALDB_URL)