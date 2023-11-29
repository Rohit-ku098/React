import React from "react";
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
   
    return (
        <>
            <nav>
                <div className="left">
                    <div className="logo">
                        <h1><span>Your</span> Logo</h1>
                    </div>
                </div>
                <div className="mid">
                    <ul>
                        <li>
                            <NavLink 
                            to='/'
                            className={({isActive})=>`link  ${isActive?"navActive":"notActive"}`}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/about'
                            className={({isActive})=>`link  ${isActive?"navActive":"notActive"}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/contact'
                            className={({isActive})=>`link  ${isActive?"navActive":"notActive"}`}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/github'
                            className={({isActive})=>`link  ${isActive?"navActive":"notActive"}`}
                            >
                                Github
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Get Started</li>
                        <li>Login</li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Navbar;