import React from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
    return (
        <>
            <div className='text-white'>
                <div className='d-flex gap-4 justify-content-end'>
                    <Link className='text-light' to={"/login"}>Log In</Link>
                    <Link className='text-light' to={"/register"}>Registrtion</Link>
                </div>
            </div>
        </>
    )
}

export default Topnav