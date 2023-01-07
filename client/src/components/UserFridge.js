import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const UserFridge = () => {
    const [type, setType] = useState([])
    const [linkTo, setLinkTo] = useState("/add-food/Chicken-meat");
    const [navigate, setNavigate] = useState(false);
    const handleClick = (value) => {
        setLinkTo(`/add-food/${value.replaceAll(' ', '-')}`)
        setNavigate(true)
    }
    useEffect(() => {
        //Alimentos tipo
        const fetchData = async () => {
            const data = await fetch(`http://127.0.0.1:5000/list-templates`);
            const json = await data.json();
            setType(json)
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])
    let meat = [], vegetables = [], fruit = [], fish = [], dairy = [];
    type.map(element => {
        if (element.food_category === "Meat") {
            meat.push(element);
        }
        if (element.food_category === "Vegetables") {
            vegetables.push(element)
        }
        if (element.food_category === "Fruit") {
            fruit.push(element)
        }
        if (element.food_category === "Fish") {
            fish.push(element)
        }
        if (element.food_category === "Dairy") {
            dairy.push(element)
        }
    })
    return (
        <div>
            {navigate && (<Navigate to={linkTo} replace={true} />)}
            <div className="container">
                <h2>Choose the food you want to track</h2>
                <h3>Meat</h3>
                <div className="food-container">

                    {meat && meat.length
                        ? meat.map((element, index) => {
                            return (
                                <button key={index}
                                    type="button"
                                    className='card'
                                    value={element.Name}
                                    onClick={e => handleClick(e.currentTarget.value)}>
                                    <img src={"." + element.img_food} width="60" alt="" />
                                    <h3>{element.Name}</h3>
                                </button>
                            )
                        }
                        ) : ""}
                </div>
                <h3>Fish</h3>
                <div className="food-container">

                    {fish && fish.length
                        ? fish.map((element, index) => {
                            return (
                                <button key={index}
                                    type="button"
                                    className='card'
                                    value={element.Name}
                                    onClick={e => handleClick(e.currentTarget.value)}>
                                    <img src={"." + element.img_food} width="60" alt="" />
                                    <h3>{element.Name}</h3>
                                </button>
                            )
                        }
                        ) : ""}
                </div>
                <h3>Vegetables</h3>
                <div className="food-container">

                    {vegetables && vegetables.length
                        ? vegetables.map((element, index) => {
                            return (
                                <button key={index}
                                    type="button"
                                    className='card'
                                    value={element.Name}
                                    onClick={e => handleClick(element.Name)}>
                                    <img src={"." + element.img_food} width="60" alt="" />
                                    <h3>{element.Name}</h3>
                                </button>
                            )
                        }
                        ) : ""}
                </div>
                <h3>Fruit</h3>
                <div className="food-container">

                    {fruit && fruit.length
                        ? fruit.map((element, index) => {
                            return (
                                <button key={index}
                                    type="button"
                                    className='card'
                                    value={element.Name}
                                    onClick={e => handleClick(e.currentTarget.value)}>
                                    <img src={"." + element.img_food} width="60" alt="" />
                                    <h3>{element.Name}</h3>
                                </button>
                            )
                        }
                        ) : ""}
                </div>
                <h3>Dairy</h3>
                <div className="food-container">

                    {dairy && dairy.length
                        ? dairy.map((element, index) => {
                            return (
                                <button key={index}
                                    type="button"
                                    className='card'
                                    value={element.Name}
                                    onClick={e => handleClick(e.currentTarget.value)}>
                                    <img src={"." + element.img_food} width="60" alt="" />
                                    <h3>{element.Name}</h3>
                                </button>
                            )
                        }
                        ) : ""}
                </div>
            </div>
        </div>
    )
}
