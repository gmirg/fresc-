const DataTypes = require('sequelize');

user_fridgeModel = {
    create: async (sequelize) => {
        const User_fridge = sequelize.define('user_fridge', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            id_food:{
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
            freezeTableName: true,
            timestamps: false
        });
 
        return User_fridge;

    }
}

module.exports = user_fridgeModel;