const conexion = require("../dataBases/mysql");
const User_fridgeModel = require("../models/user_fridge.model");
// const userr = require("./user.controllers");
const sequelize = require("../dataBases/mysql");


const user_fridge = {

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
    // delete: async (req, res) => {
    //     try {
    //         var con = await conexion.abrir();
    //         const user_boardM = await User_boardModel.create(con);
    //         res.json(await user_boardM.destroy({ where: { id: req.body.id } }));
    //     } catch (error) {
    //         res.json(error);
    //     } finally {
    //         await conexion.cerrar(con);
    //     }
    // }
};

module.exports = user_fridge;