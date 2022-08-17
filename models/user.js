const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {


})


module.exports = User