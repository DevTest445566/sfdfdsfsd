'use strict'

let Sequelize = require('sequelize');
let env = require('../env')

let db = new Sequelize(env.DATABASE_URI + env.DB_NAME);

module.exports = db;