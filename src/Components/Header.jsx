import React, { useState } from 'react'
import Opening from '../Pages/Opening'
import { Link } from 'react-router-dom'
import './Hder.css'



function Header() {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar1 unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar1 clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar1 unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <div style={{width: '100%', height: '50px'}}>
    <nav className='align-items-center'>
        <Link to={'/'} className='logo1'> <img src="Images/logo.png" width="130" height="70" alt="logo" /></Link>
        <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>

        </div>
    </nav>

    <div className={menu_class}>
      <Opening/>
    </div>


</div>
  )
}

export default Header
