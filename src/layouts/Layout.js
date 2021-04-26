import React from 'react'
import * as LayoutStyles from '../styles/layout.module.scss'
import {Navbar, NavLink, Nav} from 'react-bootstrap'
import Footer from '../components/footer'

const Layout = (props) => {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="/">VCardBook</Navbar.Brand>
                <Nav>   
                    <NavLink className="float-left" href="#login">Login</NavLink>
                </Nav>
            </Navbar>
            <div className={LayoutStyles.container}>
                <div className={LayoutStyles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout