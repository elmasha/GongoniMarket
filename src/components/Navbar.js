import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbox">
            <div className= "leftside">
                <h3 className="h1">Gongoni</h3><h3 className="h2">Market</h3>
            </div>

            <div  className= "rightside">
                <Link   to='/signp' className ='navlinks'> Sign Up</Link>
                <Link  to='/login' className = 'navlinks'> LOG In</Link>
            </div>
            
        </div>
    )
}
