import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import navigationModel from '../../config/navigation.json';

import { Link } from 'react-router-dom'

const NavBar = ({
    brand,
    toggle,
    currentView,
    isOpen
}) => {
    return (
        <Navbar color="faded" light expand="md">
            <Link to="/" className='navbar-brand'>{brand}</Link>
            <NavbarToggler onClick={() => toggle()} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        navigationModel.Menu.map(menu =>
                            <NavItem key={menu.label}>
                                <Link to={menu.link} className='nav-link'>{menu.label}</Link>
                            </NavItem>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar