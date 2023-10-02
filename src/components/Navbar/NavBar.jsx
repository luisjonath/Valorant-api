import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navbar-container'>
            
                < Link to={"/"} >
                <button className='btn-navbar'>
                Characters
                </button>
                </Link>
                < Link to={"/maps"} >
                <button className='btn-navbar'>
                Maps
                </button>
                </Link>
                < Link to={"/weapons"} >
                <button className='btn-navbar'>
                Weapons
                </button>
                </Link>
                
            
    </div>
  )
}
