import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import {auth} from '../config/Config'

export const Navbar = ({user}) => {

    const hisory = useHistory();
    const logout = ()=>{
        auth.signOut().then(()=>{
            hisory.push('/login')
        })
    }
    return (
        <div className="navbox">
            <div className= "leftside">
               <h3>GongoniMarket</h3>
            </div>

            {!user && <div className= "rightside">
                <Link   to='signup' className ='navlinks'> Sign Up</Link>
                <Link  to='login' className = 'navlinks'> Log In</Link>
            </div>}
            {user && <div className='rightside'>
                <span className="userName"><Link to='/' className='navlinks'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <span><button className='logout-btn' onClick={logout}>LOGOUT</button></span>
                </div>
            }
        </div>
    )
}
