import React from 'react'
import { generatePath, useNavigate } from "react-router-dom"



export const Close = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        let id = localStorage.getItem('user')
        const path = generatePath("/fridge/:id", { id })
        navigate(path)
    }
    return (
        <div className='close-container' >
        <div className="close">
            
                <img onClick={handleClose} className="img-right" src="http://localhost:3000/cancel.png" width="20" alt="" />
            
            
        </div>
        </div>
    )
}