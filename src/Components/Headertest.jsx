import React, { useState } from 'react'
import './Headertestcss.css'
import Opening from '../Pages/Opening'
import { Link } from 'react-router-dom'



function Headertest() {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <div style={{width: '100%', height: '50px'}}>
    <nav className='align-items-center'>
        <Link to={'/'} className='logo'> <img src="/Norton_logotest.webp" width="130" height="20" alt="logo" /></Link>
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

export default Headertest