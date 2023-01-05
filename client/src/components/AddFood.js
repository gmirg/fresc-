import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { today } from "../helpers/today";
import { Link } from "react-router-dom";

export const AddFood = () => {
    const [food, setFood] = useState([])
    const { name } = useParams();
    const [added2Fridge, setAdded2Fridge] = useState(today);
    const [expires, setExpires] = useState();
    const [open, setOpen] = useState(false)

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
    useEffect(() => {
        if (open) {
            let calcExpiredIfOpen = Date.parse(added2Fridge) + (food.lasts_oc * (3600 * 1000 * 24))
            let expiresDateIfOpen = new Date(calcExpiredIfOpen).toLocaleDateString()
            setExpires(expiresDateIfOpen)
        } else {
            let calcExpired = Date.parse(added2Fridge) + (food.lasts * (3600 * 1000 * 24))
            let expiresDate = new Date(calcExpired).toLocaleDateString()
            setExpires(expiresDate);
        }
    }, [food, added2Fridge, open])
    const addtoFridge = e => {
        e.preventDefault();
        let dateOnFridge = new Date(e.target.onFridge.value).toLocaleDateString()
        let data = {
            Name: food.Name,
            food_category: food.food_category,
            qty: e.target.quantity.value,
            onFridge: dateOnFridge,
            opened_cooked: e.target.oc.value,
            Notes: e.target.message.value,
            expires_on: expires
        }
        console.log(data)
    }
    console.log(open)
    return (
        <div>
            <div className="close">
            <Link to="/"><img className="img-right" src="http://localhost:3000/cancel.png" width="16" alt="" /></Link>
            </div>
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
                <form onSubmit={addtoFridge}>
                    <div>
                        <label>Quantity</label>
                        <input type="number" name="quantity" required />
                    </div>
                    <div>
                        <label>On fridge</label>
                        <input type="date"
                            name="onFridge"
                            defaultValue={added2Fridge}
                            onChange={e => setAdded2Fridge(e.target.value)}
                            required />
                    </div>
                    <div onChange={e => setOpen(e.target.value)}>
                        <label>Opened / cooked</label>
                        <div className="radio">
                            <input type="radio"
                                id="Yes"
                                name="oc"
                                value={true}    
                                required />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio"
                                id="No"
                                name="oc"
                                value={false}
                                required defaultChecked autoComplete="true" />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <textarea name="message" />
                    </div>
                    <img className="logo-center" src="http://localhost:3000/frescoo.png" width="96" alt="" />
                    {food.lasts && food.lasts_oc ? (
                        <div className="expiration">
                            <span className="fresco">frescoo until: </span><span className="exdate">{expires}</span>
                        </div>
                    ) : ""}
                    <input type="submit" value="Add food" />
                </form>
            </div>


        </div>
    )
}
