const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a MySQL')
    })
    .catch(err => {
        console.log('No conectado: ' + err)
    });

module.exports = sequelize

