const Sequelize = require('sequelize');
const mongoose = require("mongoose");

// Conexión a Mongodb
const url = "mongodb://localhost:27017/frescoo";

mongoose.connect(url, function (err) {
    if (err) throw err;
    console.log("Conexión correcta a mongodb");
});
mongoose.disconnect();

// Conexión a MySql

const sequelize = new Sequelize('frescoo_users', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a SQL')
    })
    .catch(err => {
        console.log('No conectado: ' + err)
    });
