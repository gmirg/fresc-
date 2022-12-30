import mongoose from 'mongoose'
const { Schema } = mongoose
// {
//     "_id": 1,
//     "Name": "Chicken Meat",
//     "img_food": "./img/meat/chicken.png",
//     "food_category": "Meat",
//     "category_icon": "./img/meat/turkey.png",
//     "qty": "",
//     "value": 4.58,
//     "onFridge": "",
//     "opened/cooked": "",
//     "Notes": "",
//     "expiration alert": ""
//   }

 
let foodSchema= new Schema({
    id: Number,
    Name: String, 
    img_food: String,
    food_category: String,
    category_icon: String,
    qty: Number,
    value: Number,
    onFridge: Date,
    opened_cooked: Date,
    Notes: String,
    expiration_alert: Date
});
 
const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;