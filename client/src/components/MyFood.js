import React from 'react'
import { useState, useEffect } from 'react'


export const MyFood = () => {
    const [trackedFood, setTrackedFood] = useState([])
    const [fridgeContent, setFridgeContent] = useState()
    const [start, setStart] = useState(false);

    useEffect(() => {
        let user_id = localStorage.getItem('user')
        const fetchData = async () => {
            const data = await fetch(`http://localhost:5000/my-food/${user_id}`)
            const json = await data.json();
            console.log(json)
            setTrackedFood(json)
            setStart(true)
        }
        fetchData()
            .catch(console.error);

    }, [])

    useEffect(() => {
        if (start) {
            fetch('http://127.0.0.1:5000/food-from-user-fridge', {
                method: 'POST',
                body: JSON.stringify(ids),
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json",
                }
            })
                .then(res => res.json())
                .then(json => setFridgeContent(json))
        }
    }, [trackedFood,start])

    let ids = [];
    let idsFood = trackedFood.map(element => {
        ids.push(element.id_food)
    })
    // const fridgeFood = async () => {
    //     fetch('http://127.0.0.1:5000/food-from-user-fridge', {
    //         method: 'POST',
    //         body: JSON.stringify(ids),
    //         mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Content-type": "application/json",
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    // // }
    return (
        <>
            <h2>Your food</h2>
            <div>
                {fridgeContent
                    ? fridgeContent.map((element, index) => {
                        return (
                            <button key={index}
                                type="button"
                                className='card'
                                value={element.Name}>
                                <img src={"." + element.img_food} width="60" alt="" />
                                <h3>{element.Name}</h3>
                                <h4>Expires on {element.expires_on}</h4>
                            </button>
                        )
                    }
                    ) : <div className="myfood-container">
                        <div className='empty'>
                            <div>It seems that your<br /><span className="brand">frescoo</span><br />fridge it's empty<br />
                                Let's try to add some food!</div>
                            <div><img className='down' src="../down-arrow.png" width="40" alt="" /></div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
