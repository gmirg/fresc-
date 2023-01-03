// const { conexion } = require('mongoose');
// const sequelize = new Sequelize(process.env.DATABASE, 'root', 'rootroot', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// })
const conexion = {
    abrir: async () => {
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize(process.env.DATABASE, 'root', 'rootroot', {
            host: 'localhost',
            // timezone: '+01:00',
            dialect: 'mysql',
            port: 3306
        })
        await sequelize.authenticate()
            .then(() => {
                console.log("Abierta Sequelize")
            })
        return sequelize;

    },
    cerrar: async con => {
        await con.close();
        console.log("Cerrada Sequelize");
    }
}