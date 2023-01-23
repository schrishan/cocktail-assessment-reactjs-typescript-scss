import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/Header.style.scss';
import Logo from '../assests/images/logo.svg';

const Header = () =>{

    const [menuToggle, setMenuToggle] =useState(false)
    
    return(
        <header>
            <div className="container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
                <span className="logo-wrp"><Link to='/'> <img src={Logo} alt="Logo"/></Link></span>
                <span className="menu-toggle" onClick={() => setMenuToggle(!menuToggle)}><i className={`bi ${menuToggle?'bi-x-lg':'bi-three-dots'}`}></i></span>
                <div className={`nav-wrp ${menuToggle?'nav-opened':''}`}>
                <nav>
                <span className='nav-itm' onClick={() => setMenuToggle(!menuToggle)}><NavLink  to="/"  className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></span>
                <span className='nav-itm' onClick={() => setMenuToggle(!menuToggle)}><NavLink  to="/search"  className={({ isActive }) => (isActive ? "active" : "")}>Search</NavLink></span>
                <span className='nav-itm' onClick={() => setMenuToggle(!menuToggle)}><NavLink  to="/favourites"  className={({ isActive }) => (isActive ? "active" : "")}>Favourites</NavLink></span>
                    {/* <span className='nav-itm'><Link to='/'>Home</Link></span>
                    <span className='nav-itm'><Link to='/search'>Search</Link></span>
                    <span className='nav-itm'><Link to='/favourites'>Favourites</Link></span> */}
                </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;