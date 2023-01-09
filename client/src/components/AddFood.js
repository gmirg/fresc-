import React, { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { today } from "../helpers/today";

import { useNavigate,generatePath } from "react-router-dom";
import { Close } from "../helpers/Close";

export const AddFood = () => {
    const [food, setFood] = useState([])
    const { name } = useParams();
    const [added2Fridge, setAdded2Fridge] = useState(today);
    const [expires, setExpires] = useState();
    const [open, setOpen] = useState("No")
    const [idMongo, setIdMongo] = useState();
    const didMount = useRef(false);
    const navigate = useNavigate();
    /**
     * Carga los datos del alimento que se ha clickado para poder añadir. Aquí tuve un problema, al cambiar 
     * los id de mongo por unos propios, al hacer un filtro para obtener los resultados, no me devolvía
     * el id, no aparecia, por lo que tuve que tomar el nombre como plan B
     * 
     */
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`http://127.0.0.1:5000/food/${name}`);
            const json = await data.json();
            setFood(json)
        }
        fetchData()
            .catch(console.error);
    }, [])
    
    /**
     * Gestiona los cambios en los inputs para calcular la fecha en cual se tiene que 
     * consumir como máximo. 
     * Inputs: La fecha de entrada en el frigo y si esta abierto o cocinado
     */
    useEffect(() => {
        if (open === "Yes") {
            let calcExpiredIfOpen = Date.parse(added2Fridge) + (food.lasts_oc * (3600 * 1000 * 24))
            let expiresDateIfOpen = new Date(calcExpiredIfOpen).toLocaleDateString()
            setExpires(expiresDateIfOpen)
        } else {
            let calcExpired = Date.parse(added2Fridge) + (food.lasts * (3600 * 1000 * 24))
            let expiresDate = new Date(calcExpired).toLocaleDateString()
            setExpires(expiresDate);
        }
    }, [food, added2Fridge, open])
    /** 
     * funcion que maneja la insercion de un alimento en las dos bases de datos, por una parte se añade la coleccion 
     * alimentos de los usuarios y por otra se relaciona en SQL el alimento con el usuario
     * @param {*} e 
    */
    const addtoFridge = async (e) => {
        e.preventDefault();
        let dateOnFridge = new Date(e.target.onFridge.value).toLocaleDateString()
        let data = {
            Name: food.Name,
            img_food: food.img_food,
            food_category: food.food_category,
            qty: e.target.quantity.value,
            value: food.value,
            onFridge: dateOnFridge,
            opened_cooked: e.target.oc.value,
            Notes: e.target.message.value,
            expires_on: expires
        }
        console.log(data)
        await fetch('http://127.0.0.1:5000/add', {
            method: 'POST',
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                return res.json()
            })
            .then(data => {
                if (data) {
                    setIdMongo(data.id)
                }
            })
            .catch((error) => {
                console.error(`Could not get products: ${error}`);
            });
    }
    useEffect(() => {
        // const insertInMongo = async () => {
            if ( !didMount.current ) {
                didMount.current = true;
            }
            let id = idMongo;
            let food2fridge = {
                id_food: id,
                fk_id_user: localStorage.getItem('user')
            }
            fetch('http://127.0.0.1:5000/food2fridge', {
                method: 'POST',
                body: JSON.stringify(food2fridge),
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json",
                }
            })
                .then(res => res.json())
                .then(json => console.log(json));
        // }
    }, [idMongo])
    
    /**
     * Maneja el cambio de los input button radio
     * @param {*} e 
     */
    const handleChange = (e) => {
        setOpen(e.target.value)
    }
    return (
        <div>
            <Close />
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
                        <input type="number" step="0.01" name="quantity" required />
                    </div>
                    <div>
                        <label>On fridge</label>
                        <input type="date"
                            name="onFridge"
                            defaultValue={added2Fridge}
                            onChange={e => setAdded2Fridge(e.target.value)}
                            required />
                    </div>
                    <div>

                        <label>Opened / cooked</label>
                        <div className="radio">
                            <input type="radio"
                                id="Yes"
                                name="oc"
                                value="Yes"
                                checked={open === "Yes"}
                                onChange={handleChange}
                                required />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio"
                                id="No"
                                name="oc"
                                value="No"
                                checked={open === "No"}
                                onChange={handleChange}
                                required />
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
