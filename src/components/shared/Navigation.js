import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink, Redirect } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar expand="md" className="nav--main">
            <Container className="nav__container--main">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto nav__list--main" navbar>
                    <NavItem className="nav__listItem--main">
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem className="nav__listItem--main">
                        <NavLink href="/#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem className="nav__listItem--main">
                        <NavLink href="/#about">About</NavLink>
                    </NavItem>
                    <NavItem className="nav__listItem--main">
                        <NavLink href="/#contact">Contact</NavLink>
                    </NavItem>
                    <NavItem className="nav__listItem--main">
                        <NavLink tag={RouteLink} to="/submissions">Login</NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation