import React from 'react'
import logo from '../images/logo.webp'
import { Link } from 'react-router-dom'
import {BsFillBagFill} from 'react-icons/bs'


const Nav = () => {
    return (
         <>
         <div className="nav">
             <div className="container">
            <div className="nav_container">
                <div className="nav_left">
                 <Link to='/'><img src={logo} alt="logo" /></Link>  
                </div>
                    <div className="nav_right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon"/> 
                             <span>4</span>
                            </div>
                        </Link>

                    </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Nav;
