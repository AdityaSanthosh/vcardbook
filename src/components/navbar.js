import React from 'react'
import * as NavBarStyles from "../styles/navbar.module.scss"

const Navbar = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">  
          <ul className="navbar-nav d-lg-flex align-items-center me-3">
            <li className={NavBarStyles.nav__item}><a href="index.html" className="nav-link"><span className={NavBarStyles.navitemtext}>VCardBook</span></a></li>
            <li className={NavBarStyles.nav__item}><span className={NavBarStyles.navitemtext}>Login</span></li>
          </ul>
        </nav><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default Navbar;