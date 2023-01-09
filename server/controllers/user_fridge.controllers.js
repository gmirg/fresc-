const conexion = require("../dataBases/mysql");
const User_fridgeModel = require("../models/user_fridge.model");
// const userr = require("./user.controllers");
const sequelize = require("../dataBases/mysql");


const user_fridge = {
    /**
     * Inserta un alimento por id de mongo y lo relaciona con el usuario que lo ha añadidd
     * @param {*} req id de mongo e id de usuario
     * @param {*} res ok, error
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const usrfM = await User_fridgeModel.create(con);
            const params = req.body;
            await usrfM.create(params)
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }

    },
    /**
     * Extrae el Id de mongo de la base de datos de SQL 
     * @param {*} req 
     * @param {*} res user id
     * @returns json con los ids de los alimentos de ese usuario,
     */

    food_from_user: async (req,res) => {
        var con = await conexion.abrir();
        const user_id = req.params.user_id;
        console.log(user_id);
        const usrfM = await User_fridgeModel.create(con);
        const userFood = await usrfM.findAll({ where: fk_id_user = user_id, attributes : ['id_food']})
            .then(data => {
                res.json(data)
            })

        await conexion.cerrar(con);
        return userFood
    }
};

module.exports = user_fridge;