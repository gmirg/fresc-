import React from 'react'
import { UserFridge } from '../components/UserFridge'
import { Routes, Route } from 'react-router-dom'

export const routes = () => {

    return (
        <div>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<UserFridge />} />
            </Routes>
        </div>
    )
}