const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlsequelize', 'root', 'Nethra@1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;