const conexion = require("../dataBases/mysql");
const User_fridgeModel = require("../models/user_fridge.model");
// const userr = require("./user.controllers");


const user_fridge = {

    insert: async (req, res) => {
        try {
        var con = await conexion.abrir();
        const usrfM = await User_fridgeModel.create(con);
        const params = req.body;
        await usrfM.create(params)
        }  catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
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