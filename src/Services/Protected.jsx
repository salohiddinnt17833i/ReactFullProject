import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Protected() {
    const auth = localStorage.getItem("logged")
    return auth ? <Outlet></Outlet> : <Navigate to={"/login"}></Navigate>
}

export default Protected