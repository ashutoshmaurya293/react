import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h2>LOGO</h2>
        <NavLink to={'/'}><button>Home</button></NavLink>
        <NavLink to={'/card'}><button>add</button></NavLink>
        <button>Login</button>
        
    </div>
  )
}

export default Header