const { Schema, model } = require("mongoose");

let foodTemplateSchema = new Schema({
    Name: String, 
    img_food: String,
    food_category: String,
    category_icon: String,
    qty: Number,
    value: Number,
    onFridge: {
        type: Date,
        // default: Date.now
    },
    opened_cooked: Date,
    Notes: String,
    expired: Boolean,
    expiration_alert: Date
});
var FoodTemplate = model("FoodTemplate", foodTemplateSchema, "food")
let foodSchema= new Schema({
    Name: String, 
    img_food: String,
    food_category: String,
    category_icon: String,
    qty: Number,
    value: Number,
    onFridge: {
        type: Date,
        // default: Date.now
    },
    lasts : Number,
    lasts_oc: Number,
    opened_cooked: Boolean,
    Notes: String,
    expired: Boolean,
    expires_on: Date
});
var Food = model("Food", foodSchema, "food_users")

module.exports = {
    FoodTemplate : FoodTemplate,
    Food : Food
}