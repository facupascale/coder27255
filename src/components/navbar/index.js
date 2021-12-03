import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='nav-container'> 
                <div className="brand">
                    <Link to="/"><h3>Home</h3></Link>
                </div>
                <ul className='lista'>
                    <li><Link to='/'>Catálogo</Link></li>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/cart'>Carrito</Link></li>
                </ul>
              
        </div>
    
    )
}