import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AddFood = () => {
    const [food, setFood] = useState([])
    const { name } = useParams();

    useEffect(() => {


        const fetchData = async () => {
            const data = await fetch(`http://127.0.0.1:5000/food/${name}`);
            const json = await data.json();
            setFood(json)
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])
    console.log(food)
    return (
        <div>
            <div className="form-header">
                <div className="name-block">
                    <h1>{food.Name}</h1>
                    <h2>{food.food_category}</h2>
                </div>
                <div className="image-block">
                    <img className="thumb" src={"." + food.img_food} width="96" alt="" />
                </div>
            </div>
            <div className='form-container'>
                <form >
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" required />
                    </div>
                    <div>
                        <label>On fridge</label>
                        <input type="date" name="onFridge" value={food.onFridge} required />
                    </div>
                    <div>
                        <label>Opened/cooked</label>
                        <div className="radio">
                            <input type="radio" id="Yes" required />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" id="No" required />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <textarea required />
                    </div>
                    <div>
                        <span className="fresco">frescoo until:</span>
                    </div>
                    <input type="submit" />
                </form>
            </div>


        </div>
    )
}
