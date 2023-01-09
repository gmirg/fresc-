const {FoodTemplate, Food} = require("../models/food.model")

const fridge = {
    //  Carga los alimentos tipo
    getTemplates: async (req, res) => {
            const infoTemplates = await FoodTemplate.find({});
            res.json(infoTemplates);
    },
    /**
     * Añade un alimento de un usuario para su seguimiento
     * @param {*} req 
     * @param {*} res 
     */
    addFood: async (req, res) => {
        const  parameters = req.body;
        let newFood = new Food(parameters);
        
        newFood.save((error, result) => {
            if (error || !result) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "No se ha guardado el articulo",
                    newFood
                })
            }
            return res.status(200).json({
                status: "success",
                mensaje: "Lo has guardado en la BD",
                id : result.id
            })
        });
    },
    /**
     * Para mostrar la ficha del alimento que se quiere añadir
     * @param {*} req el nombre del alimento
     * @param {*} res json de alimento
     */
    getOne: async (req, res) => {
        let params_food_name = req.params.name;
        let food_name = (params_food_name.charAt(0).toUpperCase() + params_food_name.slice(1)).replaceAll('-', ' ')
        const foodFile = await FoodTemplate.findOne({ Name : food_name })           
        res.json(foodFile)
    },

    /**
     * Coge los alimentos que tiene un usuario en su frigorifico para mostrarlos
     * @param {*} req ids de los alimentos
     * @param {*} res json todos los alimentos que hace seguimiento del usuario
     */
    getMany : async (req, res) => {
        const ids =  req.body
        const user_food = await Food.find().where('_id').in(ids).exec()
        res.json(user_food)
    }
};

module.exports = fridge;