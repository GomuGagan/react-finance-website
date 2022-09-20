import React, { useState } from 'react';
import "./navbar.css";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [color, setcolor] = useState(false);

    const [click, setClick]= useState(false);

    const changeColor =()=>{
        if(window.scrollY >= 350){
            setcolor(true);
        } else{
            setcolor(false);
        }
    }
    window.addEventListener("scroll", changeColor);

    const handleClick = ()=>{
        setClick(!click);
    }
    const closeMenu = ()=> setClick(false);
  return (
    <div className={color? "header header-bg" : "header"}>
        <nav className="navbar">
            <a href="/" className='logo'>
                <img src={Logo} alt="logo" />
            </a>
            <div className="hamburger" onClick={handleClick}>
                {click? (<FaTimes size={30} style={{color:"#fff"}}/>) : (<FaBars size={30} style={{color:"#fff"}}/>)}
                
            </div>
            <ul className={click? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'><a href="/" onClick={closeMenu}>Home</a></li>
                <li className='nav-item'><a href="#about" onClick={closeMenu}>About</a></li>
                <li className='nav-item'><a href="#testimonial" onClick={closeMenu}>Testimonials</a></li>
                <li className='nav-item'><a href="#demo" onClick={closeMenu}>Demo</a></li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar